package main

import (
	"crypto/tls"
	"log"
	"net"
	"net/http"
	"sync"
	"time"

	"github.com/quic-go/quic-go/http3"
)

// HTTP/3 on UDP 443: a browser that learned it from Alt-Svc comes back over QUIC, and its ClientHello inside the
// QUIC handshake gives a QUIC JA4 ("q13d…"). The hello is taken as the handshake starts, keyed by the client's
// address, and read once by its request; kept a minute at most, in memory only.
type quicHellos struct {
	mu sync.Mutex
	m  map[string]quicHello
}
type quicHello struct {
	at time.Time
	h  *helloInfo
}

func (q *quicHellos) put(addr string, h *helloInfo) {
	q.mu.Lock()
	q.m[addr] = quicHello{time.Now(), h}
	for k, v := range q.m {
		if time.Since(v.at) > time.Minute {
			delete(q.m, k)
		}
	}
	q.mu.Unlock()
}
func (q *quicHellos) get(addr string) *helloInfo {
	q.mu.Lock()
	defer q.mu.Unlock()
	return q.m[addr].h
}

var hellos3 = &quicHellos{m: map[string]quicHello{}}

// the hello's parts as Go hands them over (GREASE left out, as for TCP)
func helloFromInfo(ci *tls.ClientHelloInfo) *helloInfo {
	h := &helloInfo{version: 0x0303, sni: ci.ServerName != "", quic: true}
	for _, c := range ci.CipherSuites {
		if !grease(c) {
			h.ciphers = append(h.ciphers, c)
		}
	}
	for _, e := range ci.Extensions {
		if !grease(e) {
			h.exts = append(h.exts, e)
		}
	}
	for _, g := range ci.SupportedCurves {
		if !grease(uint16(g)) {
			h.groups = append(h.groups, uint16(g))
		}
	}
	for _, s := range ci.SignatureSchemes {
		h.sigalgs = append(h.sigalgs, uint16(s))
	}
	for _, v := range ci.SupportedVersions {
		if !grease(v) {
			h.versions = append(h.versions, v)
		}
	}
	h.alpn = append(h.alpn, ci.SupportedProtos...)
	return h
}

func serveQUIC(addr string, base *tls.Config, handler http.Handler) {
	cfg := base.Clone()
	cfg.NextProtos = []string{http3.NextProtoH3}
	cfg.MinVersion = tls.VersionTLS13
	get := base.GetCertificate
	cfg.GetConfigForClient = func(ci *tls.ClientHelloInfo) (*tls.Config, error) {
		if ci.Conn != nil {
			hellos3.put(ci.Conn.RemoteAddr().String(), helloFromInfo(ci))
		}
		return nil, nil
	}
	cfg.GetCertificate = get
	s := &http3.Server{Addr: addr, Handler: handler, TLSConfig: http3.ConfigureTLSConfig(cfg)}
	if err := s.ListenAndServe(); err != nil {
		log.Printf("QUIC off: %v", err)
	}
}

var _ = net.ParseIP
