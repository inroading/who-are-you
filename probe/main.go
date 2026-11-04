// probe.1ms.dog: what a browser's own connection gives away, read where Cloudflare can't: the TCP SYN (initial TTL,
// window, options, MSS), the TLS ClientHello (JA3, JA4) and the HTTP/2 preface (SETTINGS, window update, priorities,
// pseudo-header order: the Akamai fingerprint). Browsers reach it directly (DNS only), the page asks GET /fp and gets
// its own connection's readings back. Nothing is logged or kept: a SYN waits in memory for its connection, a minute
// at most.
package main

import (
	"context"
	"crypto/tls"
	"encoding/json"
	"flag"
	"log"
	"net"
	"net/http"
	"strings"
	"sync"
	"time"

	"golang.org/x/crypto/acme/autocert"
	"golang.org/x/net/http2"
)

type ctxKey struct{}

// what one connection gave away, filled as it is accepted, handshaken and read
type connInfo struct {
	syn   *synInfo
	hello *helloInfo
	rec   *recorder // the first plaintext bytes (HTTP/2 preface and frames)
}

func main() {
	addr := flag.String("addr", ":443", "listen address")
	domain := flag.String("domain", "probe.1ms.dog", "certificate name")
	cache := flag.String("certs", "/var/lib/probe/certs", "certificate cache")
	iface := flag.String("iface", "", "interface for the SYN capture (empty: the default route's)")
	dev := flag.Bool("dev", false, "a self-signed certificate (testing by IP)")
	flag.Parse()

	syns := newSynTable()
	go func() {
		if err := captureSyns(*iface, portOf(*addr), syns); err != nil {
			log.Printf("SYN capture off: %v", err)
		}
	}()

	tcfg := &tls.Config{NextProtos: []string{"h2", "http/1.1"}, MinVersion: tls.VersionTLS10}
	if *dev {
		tcfg.Certificates = []tls.Certificate{selfSigned(*domain)}
	} else {
		m := &autocert.Manager{Prompt: autocert.AcceptTOS, HostPolicy: autocert.HostWhitelist(*domain), Cache: autocert.DirCache(*cache)}
		// (a certificate that can't be had is logged, its reason only: nothing about who asked)
		tcfg.GetCertificate = func(h *tls.ClientHelloInfo) (*tls.Certificate, error) {
			c, err := m.GetCertificate(h)
			if err != nil && h.ServerName == *domain {
				log.Printf("certificate: %v", err)
			}
			return c, err
		}
		tcfg.NextProtos = append(tcfg.NextProtos, "acme-tls/1")
	}

	ln, err := net.Listen("tcp", *addr)
	if err != nil {
		log.Fatal(err)
	}
	h := handler()
	h2s := &http2.Server{}
	h1s := &http.Server{Handler: h, ReadHeaderTimeout: 10 * time.Second, IdleTimeout: 30 * time.Second,
		ConnContext: func(ctx context.Context, c net.Conn) context.Context {
			if pc, ok := c.(*plainConn); ok {
				return context.WithValue(ctx, ctxKey{}, pc.info)
			}
			return ctx
		}}
	h1 := newChanListener(ln.Addr())
	go h1s.Serve(h1)
	log.Printf("probe on %s (%s)", *addr, *domain)
	for {
		c, err := ln.Accept()
		if err != nil {
			continue
		}
		go serve(c, tcfg, syns, h1, h2s, h)
	}
}

func serve(c net.Conn, tcfg *tls.Config, syns *synTable, h1 *chanListener, h2s *http2.Server, h http.Handler) {
	info := &connInfo{}
	if ta, ok := c.RemoteAddr().(*net.TCPAddr); ok {
		info.syn = syns.take(ta.IP, ta.Port)
	}
	raw := &teeConn{Conn: c, rec: &recorder{max: 32 << 10}}
	tc := tls.Server(raw, tcfg)
	tc.SetDeadline(time.Now().Add(15 * time.Second))
	if err := tc.Handshake(); err != nil {
		c.Close()
		return
	}
	tc.SetDeadline(time.Time{})
	info.hello = parseClientHello(raw.rec.bytes())
	info.rec = &recorder{max: 16 << 10}
	pc := &plainConn{Conn: tc, info: info}
	switch tc.ConnectionState().NegotiatedProtocol {
	case "acme-tls/1":
		c.Close()
	case "h2":
		h2s.ServeConn(pc, &http2.ServeConnOpts{Handler: h, Context: context.WithValue(context.Background(), ctxKey{}, info)})
	default:
		h1.push(pc)
	}
}

func handler() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("/fp", func(w http.ResponseWriter, r *http.Request) {
		info, _ := r.Context().Value(ctxKey{}).(*connInfo)
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Cache-Control", "no-store")
		w.Header().Set("Content-Type", "application/json")
		out := map[string]any{"ip": hostOf(r.RemoteAddr), "proto": r.Proto}
		if info != nil {
			if info.syn != nil {
				out["tcp"] = info.syn.report()
			}
			if info.hello != nil {
				out["tls"] = info.hello.report()
			}
			if r.ProtoMajor == 2 {
				if f := parseH2(info.rec.bytes()); f != nil {
					out["http2"] = f
				}
			}
		}
		out["ua"] = r.UserAgent()
		json.NewEncoder(w).Encode(out)
	})
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain; charset=utf-8")
		w.Write([]byte("probe.1ms.dog: the connection readings of https://who.1ms.dog (GET /fp). Nothing is logged.\n"))
	})
	return mux
}

// a connection's reads, kept up to max bytes, for the ClientHello and the HTTP/2 preface
type recorder struct {
	mu  sync.Mutex
	buf []byte
	max int
}

func (r *recorder) add(p []byte) {
	r.mu.Lock()
	if room := r.max - len(r.buf); room > 0 {
		if len(p) > room {
			p = p[:room]
		}
		r.buf = append(r.buf, p...)
	}
	r.mu.Unlock()
}
func (r *recorder) bytes() []byte {
	r.mu.Lock()
	defer r.mu.Unlock()
	return append([]byte(nil), r.buf...)
}

type teeConn struct {
	net.Conn
	rec *recorder
}

func (c *teeConn) Read(p []byte) (int, error) {
	n, err := c.Conn.Read(p)
	if n > 0 {
		c.rec.add(p[:n])
	}
	return n, err
}

// the decrypted connection, its first bytes recorded (HTTP/2 frames)
type plainConn struct {
	net.Conn
	info *connInfo
}

func (c *plainConn) Read(p []byte) (int, error) {
	n, err := c.Conn.Read(p)
	if n > 0 {
		c.info.rec.add(p[:n])
	}
	return n, err
}

// HTTP/1.1 connections, handed to net/http one by one
type chanListener struct {
	ch   chan net.Conn
	addr net.Addr
}

func newChanListener(a net.Addr) *chanListener      { return &chanListener{ch: make(chan net.Conn, 64), addr: a} }
func (l *chanListener) push(c net.Conn)            { l.ch <- c }
func (l *chanListener) Accept() (net.Conn, error)   { return <-l.ch, nil }
func (l *chanListener) Close() error               { return nil }
func (l *chanListener) Addr() net.Addr             { return l.addr }

func hostOf(a string) string {
	h, _, err := net.SplitHostPort(a)
	if err != nil {
		return a
	}
	return h
}
func portOf(a string) int {
	_, p, _ := net.SplitHostPort(a)
	n := 0
	for _, ch := range p {
		n = n*10 + int(ch-'0')
	}
	if n == 0 {
		n = 443
	}
	return n
}

var _ = strings.TrimSpace
