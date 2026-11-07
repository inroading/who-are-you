# Roadmap: the strongest and the most fun web privacy test

The goal: of every privacy test on the web, the one that reads the most (by the rules a web page plays by: no
install, no permission it doesn't ask for), and the one people most enjoy and share. This file is the plan and its
state, kept up to date as work lands; the research it rests on is at the end.

## Where who stands (118 sniffers, 14 disguise checks, 4 protocol checks; 2026-11-07)

Ahead of the field: the portrait (one paragraph from all readings), disguise checks that cross-read the readings
(time zone, language, DNS, split routing, WebRTC, data center, user agent, round trip, system languages, anti-detect
browser traces, tampering), six exits per destination type, post-quantum and ECH checks, real anonymous counts for
how common a value is, 10 languages, topic pages.

Behind the field:

| Gap | Who has it | Note |
| --- | --- | --- |
| Lie detection in depth: prototype and getter lies over many APIs, Proxy traces, iframe and worker scope compared | CreepJS | who checks a handful of functions and one worker |
| Naming the protection: Brave farbling, Firefox RFP / FPP, Tor Browser, Safari ATFP, CanvasBlocker-style extensions | CreepJS (resistance) | who says "noise", not whose |
| Rendering fingerprints: DOMRect / ClientRects, SVGRect, text metrics, WebGL image pixels, WebGPU limits | CreepJS, BrowserLeaks, BrowserScan | |
| Engine fingerprints: Window / HTMLElement / computed-style key counts, CSS features, timer resolution, stack depth | CreepJS | a version read from the feature set |
| Codecs and media: WebRTC codec list, MediaRecorder types, speech voices as a hash | CreepJS | |
| Tracker blocking actually working (known tracker test domains) | Cover Your Tracks (EFF) | |
| Cookie-less re-identification demos: ETag / cache, HSTS, favicon | supercookie.me-style demos | the Worker can do ETag |
| Same machine across browsers (hardware-only ID) | research demos | "switching browsers doesn't help" |
| Opt-in readings: precise location vs the IP's, motion sensors on phones | BrowserLeaks, BrowserScan | behind a button, never on load |
| TCP/IP OS fingerprint (p0f, JA4T), HTTP/2 (Akamai) and QUIC fingerprints, JA3 / JA4 | BrowserLeaks, BrowserScan | needs a server that sees raw packets: not a Worker |
| IP reputation (block lists) | BrowserScan, whoer | a lookup per visit, from the server |

## The plan

### 1. Strongest: what a Worker and a page can do (no new infrastructure)
1. Lie detection: native-code and descriptor checks over ~100 APIs, Proxy traps, iframe and worker scopes compared
   with the page's; feeds the tampering and anti-detect checks.
2. Naming the protection: which browser or extension is scrambling, from how it scrambles.
3. Rendering and engine fingerprints: DOMRect, SVGRect, text metrics, WebGL image, WebGPU limits, key counts, timer
   resolution, WebRTC codecs, MediaRecorder types.
4. Tracker blocking: a handful of known tracker test hosts, loaded or blocked.
5. Hardware-only ID across browsers.
6. ETag / cache re-identification demo, served by the Worker (kept in the browser's cache only, deletable).

### 2. Most fun
1. Compare with a friend: open a shared portrait and see where yours differs.
2. Opt-in, one button each: precise location against the IP's guess; phone motion sensors.
3. Weekly "most common giveaways" from the counts, on the stats page.

### 3. Our own server: probe.1ms.dog
A VPS only for 1ms.dog: AWS Lightsail Tokyo, Debian 13, 16.76.79.94 (Netcatty host "🇯🇵 1ms.dog"). Browsers connect
to probe.1ms.dog directly (DNS only, not through Cloudflare), so it sees what a Worker can't: the TCP SYN (initial
TTL, window, options, MSS: the OS and a tunnel's MTU, JA4T), the TLS ClientHello (JA3, JA4), the HTTP/2 preface
(SETTINGS, window update, priorities, pseudo-header order: the Akamai fingerprint), later QUIC. Nothing is logged.
Source in probe/. The machine is shared by the 1ms.dog tools: its ports, directories and services are given out
and recorded by 🏠 Public in 1ms-shell docs/processes.md, "VPS" (who: 443/tcp and 443/udp, /opt/1ms/who/, service
1ms-who). Later: probes in more regions, for round-trip triangulation of the exit.

Decided 2026-11-04: all of 1, all of 2 but "guess first" (not wanted), and 3.

## Done
- 2026-11-04: stored traces (four stores), sensitive APIs, how common each reading is (kuber.studio/cookie).
- 2026-11-04: probe.1ms.dog live (IPv4); on the page: TCP/IP (OS family, TTL, hops, MTU, JA4T), JA4 / JA3, HTTP/2
  (engine, pseudo-header order, Akamai) and the "connection fingerprint" check (TCP OS against the user agent's,
  HTTP/2 against the engine's). IPv6 open since 2026-11-04 (dual stack, SYN captured over both). Open: QUIC (443/udp, open in the firewall,
  not served yet).
- 2026-11-04: lie detection (1.1): 54 APIs checked for being the browser's own (source by a fresh iframe's toString,
  no own prototype, getters that refuse a stranger), own properties on navigator / screen, a fresh iframe's readings
  against the page's; feeds the tampering check.
- 2026-11-04: whose protection (1.2): Brave (farbling, navigator.brave), Firefox resistFingerprinting (Tor, Mullvad),
  Firefox FPP, Safari ATFP, a fingerprint extension, a user-agent switcher, or none.
- 2026-11-04: rendering and engine fingerprints (1.3): DOMRect, SVG text sizes, text metrics, WebGL image, WebGPU
  limits and features, WebRTC codecs, MediaRecorder formats, engine key counts, timer step, call stack depth (shown,
  not in the fingerprint ID).
- 2026-11-04: tracker blocking (1.4), behind a button: seven common trackers' scripts, without cookies or referrer;
  refused within 50 ms counts as blocked, slower failures as the network.
- 2026-11-04: hardware ID across browsers (1.5) and the ETag cache ID (1.6): roadmap part 1 done.
- 2026-11-04: behind a button each (2.2): the precise location against the IP's guess (Permissions-Policy
  geolocation=(self)); a phone's motion sensors (rate, noise, offsets as an ID).
- 2026-11-04: the stats page's week-over-week change (2.3); compare with a friend (2.1): a shared portrait's "test
  myself" carries it (?vs=), and after the run a card sets the two side by side. Roadmap part 2 done.
- 2026-11-04: /conn for the other tools; checkup facts tunnel, mss, ttl; an MTU over 1500 as a cloud's inside.
- 2026-11-04: IPv6 leaking the MAC, ICU data, scrollbar width, an extension scan, the CSS feature level, font
  smoothing, data saver; the probe's QUIC JA4 over HTTP/3 (part 3 done). 115 sniffers, 14 checks.
- 2026-11-04: the portrait tells the new readings: the worst of it (or good news) after the first paragraph, who
  opened the connection, who protects the fingerprint, how a site recognizes you anyway (cache ID, a surviving store,
  the hardware ID), labels for tunnels, returning visitors and password managers, a softer origin when only the
  language says it.
- 2026-11-06: the device model (src/models.mjs: iPhone / iPad by screen and iOS version, MacBook by display and
  chip, Android by Google Play's device list in public/assets/m/, laptops by battery or GPU), an AI agent or a script
  at the controls (the pointer's path before each click; feeds the automation check), the browser's built-in AI and
  downloaded translation languages, passkey capabilities. 118 sniffers.
  Upkeep: a new iPhone or iPad screen size (each September) needs a row in src/models.mjs; `npm run models` monthly.
  China phones come from MobileModels (CC BY-NC-SA 4.0), used because 1ms.dog is non-commercial (the user's call,
  2026-11-06): if that ever changes, drop it from scripts/models.mjs and keep Google Play's list only.

## Open
- Third-party cookies: whether the browser lets a cross-site frame keep a cookie (Chrome still does by default). Needs
  a second registrable domain to frame from (a 1ms.dog subdomain is the same site); waiting on one.
- Built-in AI row: in a fresh profile every translation pair reads "downloadable"; still to see, in a Chrome that has
  translated pages, whether downloaded languages read "available" or Chrome masks them.
- Layout shifts left (measured 2026-11-05/06): the stats pill wraps to two lines on phones in fr, de, es, pt, ru, ja and
  pushes the title down 12 px (fr phone CLS about 0.23 in production); the Cyrillic font swapping in on ru; the
  portrait's last answer rewrapping by one line at the end of a run (0.02); the desktop paragraph filling in (0.08).
- Probes in more regions, for round-trip triangulation of the exit (part 3, later).
- 1ms.dog's Cloudflare zone injects Google's tag gateway (/metrics/, gtag) into every page: a zone setting, decided by
  1ms.dog's operator, not in this repository.

## Decided against
- "Guess first" (the visitor guesses before the reveal): not wanted (2026-11-04).
- Private-window detection and disk size from the storage quota: Chrome 156 reports a fixed 10 GB in both (2026-11-06).
- :visited history sniffing: partitioned per site in Chrome. Local port scans: Chrome's local network access prompt
  breaks "no prompt on load". Opening apps by URL scheme (scheme flooding): pops dialogs.
- Detecting logins on other sites: requests other sites on the visitor's behalf, and breaks as they change.
- A Windows laptop's brand and model: no web API gives it; only laptop or not (battery, GPU).
- An unlock link in the IP row: it moved the row after the first paint (CLS 0.01); the link sits under the labels.

## Research (2026-11-04)
- BrowserLeaks: IP, JavaScript, WebRTC, Canvas, WebGL, fonts, Geolocation, feature detection, TLS (JA3 / JA4, ECH),
  content filters; experimental: QUIC, TCP/IP (JA4T, MTU, hops), HTTP/2 (Akamai), extension scanner, WebGPU,
  Client Hints, CSS media-query brute force, ClientRects, DNT / GPC.
- CreepJS: WebRTC (codecs, devices), time zone, Intl, headless / like-headless / stealth scores, resistance (privacy,
  security, mode, extension), worker scope, WebGL (image, pixels, params, extensions), screen, canvas, fonts, DOMRect,
  SVGRect, audio (trap values), speech, media types, feature version (JS / CSS / Window), CSS media queries, computed
  style, Math, Error, Window / HTMLElement keys, navigator, status (timer resolution, stack size, storage, memory),
  fuzzy hash.
- BrowserScan: authenticity score, IP blacklist, IP seen count, incognito detection, port scan (22, 3389), kernel
  detection, Client Rects, gyroscope visualizer, HTTP2 / TLS test.
- kuber.studio/cookie: narrative reveal, supercookie stores, sensitive API list, OpenRTB bid request, typing rhythm,
  reading pace.
- AmIUnique, Cover Your Tracks (EFF): uniqueness against a dataset; tracker-blocking test, bits of entropy.
