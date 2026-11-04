# Roadmap: the strongest and the most fun web privacy test

The goal: of every privacy test on the web, the one that reads the most (by the rules a web page plays by: no
install, no permission it doesn't ask for), and the one people most enjoy and share. This file is the plan and its
state, kept up to date as work lands; the research it rests on is at the end.

## Where who stands (88 sniffers, 13 disguise checks, 4 protocol checks)

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
2. Guess first: before the portrait, the visitor guesses what a site can tell; then the reveal.
3. Opt-in, one button each: precise location against the IP's guess; phone motion sensors.
4. Weekly "most common giveaways" from the counts, on the stats page.

### 3. Needs a decision: a small server of our own
TCP/IP, HTTP/2, QUIC and JA4 fingerprints need a machine that terminates TLS and sees packets (a small VPS beside
Cloudflare). It is the last gap only a server can close; cost and upkeep are the owner's call.

## Done
- 2026-11-04: stored traces (four stores), sensitive APIs, how common each reading is (kuber.studio/cookie).

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
