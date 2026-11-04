# probe.1ms.dog

What a browser's own connection gives away, read where Cloudflare can't: the TCP SYN (initial TTL, window, options,
MSS: the OS family and a tunnel's MTU, JA4T), the TLS ClientHello (JA3, JA4) and the HTTP/2 preface (the Akamai
fingerprint). who.1ms.dog asks `GET https://probe.1ms.dog/fp` and gets its own connection's readings back as JSON.
Nothing is logged or kept.

- Host: AWS Lightsail Tokyo, Debian 13, 16.76.79.94 (Netcatty "🇯🇵 1ms.dog"), only for 1ms.dog.
- DNS: `probe.1ms.dog` A 16.76.79.94 and AAAA 2406:da14:3c2:6400:d2e5:c654:ae70:30c5, DNS only (not proxied):
  the browser has to reach this machine itself.
- Certificate: Let's Encrypt through autocert (TLS-ALPN-01 on 443), cached in /var/lib/probe.
- Firewall (Lightsail): TCP 22222 (SSH), TCP 443, UDP 443.

Deploy (on the host): copy the sources to /opt/probe/src, then

```
cd /opt/probe/src && go mod tidy && go build -o /opt/probe/probe . && systemctl restart probe
```

The service is probe.service (here), running as a dynamic user with only the capabilities it needs (port 443, the
raw socket for the SYN capture). Testing by IP: `probe -dev -addr :8443` serves a self-signed certificate.
