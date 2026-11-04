package main

import (
	"fmt"
	"strings"

	"golang.org/x/net/http2/hpack"
)

// The HTTP/2 preface as the browser sent it: its SETTINGS (ids and values, in order), the connection's window
// update, any PRIORITY frames, and the order of the pseudo-headers in its first request. Together, the Akamai
// format: "1:65536;2:0;4:6291456;6:262144|15663105|0|m,a,s,p". Each browser engine sends its own.
func parseH2(b []byte) map[string]any {
	const preface = "PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n"
	if !strings.HasPrefix(string(b), preface) {
		return nil
	}
	b = b[len(preface):]
	var settings []string
	wu, prio, pseudo := "00", []string{}, []string{}
	dec := hpack.NewDecoder(65536, nil)
	headersSeen := false
	for len(b) >= 9 && !headersSeen {
		n := int(b[0])<<16 | int(b[1])<<8 | int(b[2])
		typ, flags := b[3], b[4]
		stream := (uint32(b[5])<<24 | uint32(b[6])<<16 | uint32(b[7])<<8 | uint32(b[8])) & 0x7fffffff
		if len(b) < 9+n {
			break
		}
		p := b[9 : 9+n]
		b = b[9+n:]
		switch typ {
		case 0x4: // SETTINGS
			if flags&1 == 0 {
				for i := 0; i+6 <= len(p); i += 6 {
					settings = append(settings, fmt.Sprintf("%d:%d", int(p[i])<<8|int(p[i+1]), uint32(p[i+2])<<24|uint32(p[i+3])<<16|uint32(p[i+4])<<8|uint32(p[i+5])))
				}
			}
		case 0x8: // WINDOW_UPDATE
			if stream == 0 && len(p) >= 4 {
				wu = fmt.Sprint((uint32(p[0])<<24 | uint32(p[1])<<16 | uint32(p[2])<<8 | uint32(p[3])) & 0x7fffffff)
			}
		case 0x2: // PRIORITY
			if len(p) >= 5 {
				dep := (uint32(p[0])<<24 | uint32(p[1])<<16 | uint32(p[2])<<8 | uint32(p[3])) & 0x7fffffff
				prio = append(prio, fmt.Sprintf("%d:%d:%d:%d", stream, p[0]>>7, dep, int(p[4])+1))
			}
		case 0x1: // HEADERS: the first request's pseudo-headers, in order
			headersSeen = true
			if flags&0x8 != 0 && len(p) > 0 { // padded
				pad := int(p[0])
				p = p[1:]
				if pad <= len(p) {
					p = p[:len(p)-pad]
				}
			}
			if flags&0x20 != 0 && len(p) >= 5 { // priority in the frame
				p = p[5:]
			}
			fields, err := dec.DecodeFull(p)
			if err == nil {
				for _, f := range fields {
					if strings.HasPrefix(f.Name, ":") {
						pseudo = append(pseudo, f.Name[1:2])
					}
				}
			}
		}
	}
	if len(settings) == 0 {
		return nil
	}
	pr := "0"
	if len(prio) > 0 {
		pr = strings.Join(prio, ",")
	}
	akamai := strings.Join(settings, ";") + "|" + wu + "|" + pr + "|" + strings.Join(pseudo, ",")
	return map[string]any{"akamai": akamai, "settings": settings, "window_update": wu, "pseudo": strings.Join(pseudo, ",")}
}
