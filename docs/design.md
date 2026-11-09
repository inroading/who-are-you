# Design notes: what who reads, how, and what was tested

The technical side of the project: how it compares with the other privacy tests (what each reads), what has been built
and how it works, what was tested and turned out not to work, and the data that needs upkeep. How to build, test and
deploy is in AGENTS.md.

## Against the other tests (124 readings, 14 disguise checks, 4 protocol checks; 2026-11-07)

Ahead of the field: the portrait (one paragraph from all readings), disguise checks that cross-read the readings
(time zone, language, DNS, split routing, WebRTC, data center, user agent, round trip, system languages, anti-detect
browser traces, tampering, connection fingerprint, automation), six exits per destination type, post-quantum and ECH
checks, real anonymous counts for how common a value is, 10 languages, topic pages.

What the others had that a page needed work for, and how who covers it now:

| Reading | Who has it | In who |
| --- | --- | --- |
| Lie detection: prototype and getter lies, Proxy traces, iframe and worker scope compared | CreepJS | 54 APIs, a fresh iframe, one worker |
| Naming the protection: Brave farbling, Firefox RFP / FPP, Tor Browser, Safari ATFP, extensions | CreepJS | from how it scrambles |
| Rendering fingerprints: DOMRect / ClientRects, SVGRect, text metrics, WebGL pixels, WebGPU limits | CreepJS, BrowserLeaks, BrowserScan | all |
| Engine fingerprints: key counts, CSS features, timer resolution, stack depth | CreepJS | all, shown, not in the ID |
| Codecs and media: WebRTC codecs, MediaRecorder types, speech voices | CreepJS | all |
| Tracker blocking actually working | Cover Your Tracks (EFF) | behind a button |
| Cookie-less re-identification: ETag / cache | supercookie.me-style demos | the Worker's ETag |
| Same machine across browsers (hardware-only ID) | research demos | screen, cores, GPU, fonts |
| Opt-in: precise location vs the IP's, motion sensors | BrowserLeaks, BrowserScan | behind a button each |
| TCP/IP OS (p0f, JA4T), HTTP/2 (Akamai), QUIC, JA3 / JA4 | BrowserLeaks, BrowserScan | the probe (a server of its own: a Worker never sees the raw packets) |
| IP reputation (block lists) | BrowserScan, whoer | not read: it takes a lookup per visit from the server |

## Built

- 2026-11-04: stored traces (four stores), sensitive APIs, how common each reading is (after kuber.studio/cookie).
- 2026-11-04: the probe: TCP/IP (OS family, TTL, hops, MTU, JA4T), JA4 / JA3, HTTP/2 (engine, pseudo-header order,
  Akamai) and the "connection fingerprint" check (TCP OS against the user agent's, HTTP/2 against the engine's),
  dual stack (the SYN captured over IPv4 and IPv6); later the QUIC JA4 over HTTP/3 (443/udp).
- 2026-11-04: lie detection: 54 APIs checked for being the browser's own (source by a fresh iframe's toString, no own
  prototype, getters that refuse a stranger), own properties on navigator / screen, a fresh iframe's readings against
  the page's; feeds the tampering check.
- 2026-11-04: whose protection: Brave (farbling, navigator.brave), Firefox resistFingerprinting (Tor, Mullvad),
  Firefox FPP, Safari ATFP, a fingerprint extension, a user-agent switcher, or none.
- 2026-11-04: rendering and engine fingerprints: DOMRect, SVG text sizes, text metrics, WebGL image, WebGPU limits and
  features, WebRTC codecs, MediaRecorder formats, engine key counts, timer step, call stack depth.
- 2026-11-04: tracker blocking, behind a button: seven common trackers' scripts, without cookies or referrer; refused
  within 50 ms counts as blocked, slower failures as the network.
- 2026-11-04: hardware ID across browsers, and the ETag cache ID.
- 2026-11-04: behind a button each: the precise location against the IP's guess (Permissions-Policy
  geolocation=(self)); a phone's motion sensors (rate, noise, offsets as an ID).
- 2026-11-04: the stats page's week-over-week change; comparing with a friend (a shared portrait's "test myself"
  carries it, ?vs=, and after the run a card sets the two side by side).
- 2026-11-04: the probe's /conn for other tools; an MTU over 1500 read as a cloud's inside network.
- 2026-11-04: IPv6 leaking the MAC (EUI-64), ICU data, scrollbar width, an extension scan, the CSS feature level, font
  smoothing, data saver.
- 2026-11-04: the portrait tells the new readings: the worst of it (or good news) after the first paragraph, who opened
  the connection, who protects the fingerprint, how a site recognizes you anyway (cache ID, a surviving store, the
  hardware ID), labels for tunnels, returning visitors and password managers, a softer origin when only the language
  says it.
- 2026-11-06: the device model (src/models.mjs: iPhone / iPad by screen points, pixel ratio and iOS version; MacBook by
  its built-in display and the chip Chromium's WebGL names; Android by its Client Hints model code in Google Play's
  device list and MobileModels; a laptop by its battery or GPU); an AI agent or a script at the controls (the pointer's
  path before each click, after FP-Agent, arXiv 2605.01247; feeds the automation check); the browser's built-in AI and
  downloaded translation languages; passkey capabilities (getClientCapabilities).
- 2026-11-07: a WebKit browser off Apple's systems (GNOME Web on Linux) reads as "WebKit", not Safari: WebKit reports
  "Apple GPU" on every platform, so that name alone is no Apple tell.
- 2026-11-09: Client Hints the request itself carries (the Worker asks with Accept-CH, the page reads them back and
  compares them with navigator, which a script can rewrite but a header cannot); device form (`formFactors`) and 32-bit
  Windows (`wow64`); automation traces (headless browser, driver globals, Electron) feeding the automation check; the
  identity strings a user-agent switcher forgets (`vendor`, `productSub`, plugins); a game controller behind a button;
  VR/AR availability; audio output latency; folded-posture, slow-update, HDR-video and hybrid touchscreen-pointer
  readings; the full HTTP/2 SETTINGS in the tooltip; two topic pages (`/ai-agent/`, `/client-hints/`).
- 2026-11-09: the help's questions and answers moved out of every page's HTML into one `h.<lang>.js` per language,
  fetched when help is opened (topic pages keep their own set), the FAQ structured data only on the main language
  pages, and the page-size test ceiling raised to 100,000 characters so the French, German and Russian FAQ answers
  could be written out in full again (gzip of the page stayed around 19 KB).

## Tested, and why not

- Private-window detection and disk size from the storage quota: Chrome 156 reports a fixed 10 GB quota in a normal
  window and an incognito one alike (measured 2026-11-06).
- :visited history sniffing: Chrome partitions visited links per site.
- Local port scans (localhost services): Chrome's local network access prompt; nothing may prompt on load.
- Opening apps by URL scheme (scheme flooding): pops dialogs.
- Detecting logins on other sites: it requests other sites on the visitor's behalf, and breaks as they change.
- A Windows laptop's brand and model: no web API gives it; only laptop or not (battery, GPU).
- iPhone models: Apple builds several on one screen, so the screen, the pixel ratio and the iOS version narrow it to a
  short list; refresh rate doesn't help (Safari caps requestAnimationFrame at 60 by default), nor does the GPU name.
- A link inside the IP row moved the row after the first paint (CLS 0.01): links go where the markup has room from
  the start.
- Third-party cookies (whether a cross-site frame may keep one) need a second registrable domain to frame from: a
  subdomain of the site's own is the same site.

## Not yet verified

- Built-in AI: in a fresh Chrome profile every translation pair reads "downloadable"; whether a Chrome that has
  downloaded languages reads them "available", or Chrome masks them, is still to see.

## Layout shifts measured and left (2026-11-05/06)

- The stats pill wraps to two lines on phones in fr, de, es, pt, ru, ja and pushes the title down 12 px (fr phone CLS
  about 0.23 in production).
- The Cyrillic font swapping in on ru.
- The portrait's last answer rewrapping by one line at the end of a run (0.02).
- The desktop paragraph filling in (0.08).

## Upkeep

- A new iPhone or iPad screen size (usually each September) needs a row in src/models.mjs; until then the page says
  it can't name the model, never a wrong one.
- `npm run models` monthly (Android model names); `npm run tz` when the tz database changes.
- MobileModels is CC BY-NC-SA 4.0 (non-commercial, share-alike): public/assets/m/ carries that license; a commercial
  deployment has to drop it from scripts/models.mjs and keep Google Play's list only.

## Research (2026-11-04, 2026-11-06)

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
- FP-Agent (arXiv 2605.01247): browser fingerprints barely tell AI browsing agents apart; behavior does (a single
  mousemove straight before each click, pasted or programmatic input, zero-duration scroll jumps).
- Chrome's built-in AI (Translator, LanguageModel, Summarizer): availability() answers without downloading; the
  Language Detector's model is shared, so it leaks at most one bit.
