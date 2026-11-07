# AGENTS.md

For anyone, person or AI agent, who picks up this repository. The user-facing description is in README.md; the plan,
what is done and what was decided against are in docs/roadmap.md. 1ms.dog's operating notes (accounts, who
maintains what, the shared server) are in its private repository, 1ms-shell.

## What this is

**Who Are You** (who.1ms.dog): a web privacy test. On opening, the page reads everything a website can read without
asking (118 readings, called sniffers in the code) and writes one paragraph about the visitor from them: likely
nationality, city, language, device, network, interests, fingerprint. It then cross-checks the readings the way a
site would to unmask a VPN, proxy or spoofed browser (14 checks, plus 4 connection protocol checks), and lists every
reading with how it was made. 10 languages, a topic page per check, a stats page, shareable results that carry no
address or fingerprint.

Three parts:

| Part | Where | Runs on |
| --- | --- | --- |
| The page | `src/page.html`, `src/app.js`, `src/style.css`, built into `public/` | Cloudflare Workers static assets |
| The Worker | `src/worker.js` (`/api/me`: what the server sees; `/r/<code>` share previews), `src/tally.mjs` (anonymous counts, a Durable Object) | Cloudflare Workers |
| The probe | `probe/` (Go): `probe.1ms.dog`, reads the raw TCP SYN, TLS ClientHello, HTTP/2 and QUIC openings a Worker can't see | A Linux server of its own |

Rules the code keeps, and any change must too:

- Nothing about a visitor is logged or stored on a server, except numbers in the anonymous counts. A shared link or
  card never carries the IP, the fingerprint, a MAC or a hardware ID; the city and network only if the visitor ticks
  the box.
- Nothing prompts for a permission on load. Readings that need one (precise location, motion sensors, tracker test)
  sit behind a button.
- The page must not jump (CLS): every row, blank and check has its place in the HTML before any reading arrives.
- Every string is in all 10 languages (`src/i18n/`); the build refuses a missing key.
- `public/` is generated and committed: run `npm run build` after any change in `src/` or `scripts/`.

## Run it locally

Needs Node 20 or later, and Chrome or Edge for the browser tests.

```bash
npm ci
npm run build        # src/ → public/ (pages per language, CSP, sitemap, llms.txt)
npm run dev          # wrangler dev on http://localhost:8795
```

`SITE_URL=https://your.domain npm run build` for another domain (canonical links, sitemap, llms.txt).

## Test: pick by what changed

| Change | Run |
| --- | --- |
| Anything | `npm test`: public/ matches src/, the unit tests (test/), every key in every language |
| The page, a sniffer, a string | `npm run smoke:quick`: every language page in headless Chrome, all rows, blanks and checks filled, sharing (about 20 s) |
| Topic pages, the build, the share format | `npm run smoke`: the above plus every topic page |
| The meaning of readings (`src/infer.mjs`, `src/models.mjs`) | add a case to `test/infer.test.mjs` or `test/models.test.mjs` |
| `probe/` | `go vet ./... && go build` in `probe/`, then on a server (below) |

A change visible on the page is also checked in a real browser at phone and desktop width, light and dark, for layout
shift. `CHROME_PATH=…` picks the browser for the smoke tests.

## Data tables to refresh

- `npm run tz`: time zone → country, from the tz database (writes `src/tz.mjs`). When the tz database changes.
- `npm run models`: Android model codes → names, from Google Play's device list and MobileModels (writes
  `public/assets/m/`, licensed CC BY-NC-SA 4.0 as MobileModels is). Monthly.
- iPhone and iPad screens in `src/models.mjs`: by hand, when Apple ships a new screen size (usually September).
- `npm run og`: the link-preview images (`public/og/`), after the hero's wording changes.

## Deploy

### The page and the Worker

`wrangler.toml` defines the Worker `who`: static assets from `public/`, `src/worker.js`, and the Durable Object
`TALLY` (class `Tally`, SQLite-backed). It needs no secrets. Deploy with `npx wrangler deploy` (a Cloudflare account
logged in with `npx wrangler login`), then bind a custom domain to the Worker in the Cloudflare dashboard. On
who.1ms.dog the Worker is connected to this GitHub repository through Cloudflare's Git integration: a push to `main`
deploys within about a minute. After deploying, open the site and check that the new `assets/app.<hash>.js` is served.

### The probe, from nothing

Needs: a Linux server (systemd) with a public IPv4 (and IPv6 if possible) that nothing else listens on at 443/tcp and
443/udp; a DNS name for it with A / AAAA records pointing straight at the server (not through a proxy or CDN: the
probe has to see the browser's own packets); Go 1.26 to build.

1. Build: `cd probe && go build -o probe .` (on the server, or `GOOS=linux GOARCH=amd64 go build` elsewhere).
2. Upload: the binary to `/opt/1ms/who/probe` (or any directory; the unit file names the path).
3. Unit: copy `probe/1ms-who.service` to `/etc/systemd/system/`, change `-domain` to your DNS name, then
   `systemctl daemon-reload && systemctl enable --now 1ms-who`. It runs as a dynamic user with only
   `CAP_NET_BIND_SERVICE`, `CAP_NET_RAW` and `CAP_NET_ADMIN` (port 443 and the raw socket for the SYN capture).
4. Certificate: none to bring. The probe gets one from Let's Encrypt itself (autocert, TLS-ALPN-01 on 443) and caches
   it in the state directory (`/var/lib/1ms-who`). Port 443 must be reachable from the internet for that.
5. Firewall: open 443/tcp and 443/udp (QUIC).
6. Verify: `curl https://<your name>/fp` answers JSON with `tcp`, `tls` and `http2` readings; `journalctl -u 1ms-who`
   shows only startup and errors. To test before DNS is set: `probe -dev -addr :8443` serves a self-signed
   certificate.
7. Point the page at it: the probe's host name is in `src/app.js` (search for `probe.1ms.dog`) and in the CSP's
   `connect-src` in `scripts/build.mjs`; change both for your own name and rebuild.

Other 1ms.dog tools read `/fp` and `/conn` too: keep those field names as `probe/README.md` lists them.

## Layout

```
src/worker.js      /api/me, share previews
src/tally.mjs      anonymous counts (Durable Object)
src/sniffers.mjs   every reading's row, the portrait's blanks, the checks
src/infer.mjs      what the readings mean (unit tested)
src/models.mjs     device models (unit tested)
src/app.js         the page script
src/page.html      the page; src/style.css its styles
src/pages.mjs      the topic pages
src/i18n/          10 languages
scripts/build.mjs  builds public/; scripts/critical.mjs the first screen's inlined CSS
scripts/smoke.mjs  browser smoke test
probe/             probe.1ms.dog (Go)
docs/roadmap.md    plan, done, decided against, research
```
