# probe.1ms.dog

What a browser's own connection gives away, read where Cloudflare can't: the TCP SYN (initial TTL, window, options,
MSS: the OS family and a tunnel's MTU, JA4T), the TLS ClientHello (JA3, JA4) and the HTTP/2 preface (the Akamai
fingerprint). who.1ms.dog asks `GET https://probe.1ms.dog/fp` and gets its own connection's readings back as JSON.
Nothing is logged or kept.

- Host: AWS Lightsail Tokyo, Debian 13, 16.76.79.94 (Netcatty "🇯🇵 1ms.dog"), only for 1ms.dog.
- DNS: `probe.1ms.dog` A 16.76.79.94 and AAAA 2406:da14:3c2:6400:d2e5:c654:ae70:30c5, DNS only (not proxied):
  the browser has to reach this machine itself.
- Certificate: Let's Encrypt through autocert (TLS-ALPN-01 on 443), cached in /var/lib/1ms-who.
- Its place on the host (directory /opt/1ms/who/, ports 443/tcp and 443/udp, service 1ms-who) is registered in
  1ms-shell docs/processes.md, "VPS", which 🏠 Public keeps: the machine is shared by the 1ms.dog tools, and anything
  global (firewall, SSH, system packages, certificate tools) goes through it.

Deploy (on the host): copy the sources to /opt/1ms/who/src, then

```
cd /opt/1ms/who/src && go mod tidy && go build -o /opt/1ms/who/probe . && systemctl restart 1ms-who
```

The service is 1ms-who.service (here), running as a dynamic user with only the capabilities it needs (port 443, the
raw socket for the SYN capture). Testing by IP: `probe -dev -addr :8443` serves a self-signed certificate.
