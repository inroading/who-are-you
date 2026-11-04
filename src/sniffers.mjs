// Every sniffer the page runs, one row each, in the order they are drawn. Each is a long-standing source any site can
// read without asking: the request itself (what the server sees) or a standard browser API.
//   id  the row (its name is the string "s_<id>")
//   m   how it is read, shown as is in every language
//   s   sensitive: blurred when the visitor hides their address for a screenshot
export const GROUPS = [
  ["net", [
    { id: "ip", m: "CF-Connecting-IP", s: 1 },
    { id: "geo", m: "request.cf.city", s: 1 },
    { id: "coords", m: "request.cf.latitude", s: 1 },
    { id: "isp", m: "request.cf.asOrganization" },
    { id: "dns", m: "edns.ip-api.com", s: 1 },
    { id: "tzip", m: "request.cf.timezone" },
    { id: "ptr", m: "DNS PTR", s: 1 },
    { id: "edge", m: "request.cf.colo" },
    { id: "proto", m: "request.cf.tlsVersion" },
    { id: "kex", m: "/cdn-cgi/trace · kex, sni" },
    { id: "warp", m: "/cdn-cgi/trace · warp" },
    { id: "tlsfp", m: "TLS ClientHello" },
    { id: "tcpfp", m: "probe.1ms.dog · TCP SYN" },
    { id: "ja4", m: "probe.1ms.dog · JA4" },
    { id: "h2fp", m: "probe.1ms.dog · HTTP/2 SETTINGS" },
    { id: "clock", m: "Date.now()" },
    { id: "webrtc", m: "RTCPeerConnection · STUN", s: 1 },
    { id: "lan", m: "WebRTC host candidate" },
  ]],
  // one address per kind of destination: a rule-based proxy picks the route by destination, so a split shows here
  ["exit", [
    { id: "ex_cn", m: "myip.ipip.net", s: 1 },
    { id: "ex_intl", m: "api.ip.sb", s: 1 },
    { id: "ex_gpt", m: "chatgpt.com/cdn-cgi/trace", s: 1 },
    { id: "ex_claude", m: "claude.ai/cdn-cgi/trace", s: 1 },
    { id: "ex_cf", m: "www.cloudflare.com/cdn-cgi/trace", s: 1 },
    { id: "stack", m: "Cloudflare Radar · IPv4 / IPv6", s: 1 },
  ]],
  ["hdr", [
    { id: "h_ua", m: "User-Agent" },
    { id: "h_lang", m: "Accept-Language" },
    { id: "h_chua", m: "Sec-CH-UA" },
    { id: "h_plat", m: "Sec-CH-UA-Platform" },
    { id: "h_enc", m: "Accept-Encoding" },
    { id: "h_dnt", m: "DNT · Sec-GPC" },
    { id: "h_ref", m: "Referer · document.referrer" },
  ]],
  ["loc", [
    { id: "langs", m: "navigator.languages" },
    { id: "locale", m: "Intl.DateTimeFormat" },
    { id: "tz", m: "Intl …timeZone" },
    { id: "hour", m: "Intl …hourCycle" },
    { id: "week", m: "Intl.Locale weekInfo" },
    { id: "fmt", m: "Intl.NumberFormat" },
    { id: "kbd", m: "navigator.keyboard" },
    { id: "voices", m: "speechSynthesis" },
  ]],
  ["dev", [
    { id: "os", m: "userAgentData" },
    { id: "browser", m: "userAgentData.brands" },
    { id: "arch", m: "…architecture · bitness" },
    { id: "screen", m: "screen · devicePixelRatio" },
    { id: "hz", m: "requestAnimationFrame" },
    { id: "screens", m: "screen.isExtended · screenX" },
    { id: "win", m: "innerWidth · availHeight" },
    { id: "gpu", m: "WebGL RENDERER" },
    { id: "webgpu", m: "navigator.gpu adapter.info" },
    { id: "gpulim", m: "GPUAdapter limits · features" },
    { id: "glx", m: "WebGL2 · MAX_TEXTURE_SIZE" },
    { id: "cpu", m: "hardwareConcurrency" },
    { id: "mem", m: "navigator.deviceMemory" },
    { id: "heap", m: "performance.memory" },
    { id: "touch", m: "maxTouchPoints · pointer" },
    { id: "battery", m: "navigator.getBattery" },
    { id: "conn", m: "navigator.connection" },
    { id: "media", m: "enumerateDevices" },
    { id: "audiohw", m: "AudioContext.sampleRate" },
    { id: "bio", m: "PublicKeyCredential" },
    { id: "bt", m: "bluetooth.getAvailability" },
    { id: "codecs", m: "MediaSource.isTypeSupported" },
    { id: "rtccodecs", m: "RTCRtpSender.getCapabilities" },
    { id: "recmime", m: "MediaRecorder.isTypeSupported" },
    { id: "hwdec", m: "mediaCapabilities.decodingInfo" },
    { id: "drm", m: "requestMediaKeySystemAccess" },
    { id: "storage", m: "storage.estimate" },
  ]],
  ["brw", [
    { id: "scheme", m: "prefers-color-scheme" },
    { id: "motion", m: "prefers-reduced-motion" },
    { id: "gamut", m: "color-gamut · dynamic-range" },
    { id: "a11y", m: "prefers-contrast · forced-colors" },
    { id: "sysui", m: "font-size: medium · AccentColor" },
    { id: "display", m: "display-mode" },
    { id: "dnt", m: "doNotTrack · GPC" },
    { id: "cookies", m: "navigator.cookieEnabled" },
    { id: "perms", m: "permissions.query" },
    { id: "apis", m: "usb · serial · hid · IdleDetector …" },
    { id: "pdf", m: "pdfViewerEnabled" },
    { id: "webdriver", m: "navigator.webdriver" },
    { id: "worker", m: "Worker · navigator" },
    { id: "adblock", m: "bait element" },
    { id: "ext", m: "window.ethereum · DOM marks" },
    { id: "history", m: "history.length" },
    { id: "traces", m: "localStorage · IndexedDB · Cache · window.name" },
    { id: "fonts", m: "canvas measureText" },
  ]],
  ["fp", [
    { id: "engine", m: "Error.message" },
    { id: "engver", m: "JS feature probes" },
    { id: "lies", m: "Function.prototype.toString · iframe" },
    { id: "canvas", m: "canvas.toDataURL" },
    { id: "webgl", m: "WebGL getParameter" },
    { id: "audio", m: "OfflineAudioContext" },
    { id: "mathfp", m: "Math.* → SHA-256" },
    { id: "emoji", m: "emoji measureText" },
    { id: "fontfp", m: "fonts → SHA-256" },
    { id: "domrect", m: "getClientRects · Range" },
    { id: "svgrect", m: "SVG getBBox · getComputedTextLength" },
    { id: "textm", m: "measureText actualBoundingBox" },
    { id: "glimg", m: "WebGL readPixels" },
    { id: "keys", m: "window · HTMLElement · CSS keys" },
    { id: "timer", m: "performance.now() resolution" },
    { id: "callstack", m: "recursion depth" },
    { id: "fpid", m: "SHA-256" },
    { id: "rand", m: "canvas × 2" },
    { id: "shield", m: "navigator.brave · noise · lies" },
  ]],
];
// the two columns of the sniffers card
export const COLUMNS = [["net", "exit", "hdr", "loc", "fp"], ["dev", "brw"]];
export const SNIFFERS = GROUPS.flatMap(([, l]) => l);

// the blanks of the portrait, in the order the sentence template uses them; each names the rows it comes from
export const BLANKS = {
  nat: ["langs", "tz", "geo"], city: ["geo"], lang: ["langs"], tz: ["tz"], clock: ["hour"],
  device: ["os", "screen", "touch"], browser: ["browser"], screen: ["screen", "hz"], gpu: ["gpu"], rig: ["gpu", "hz", "cpu"],
  isp: ["isp"], nettype: ["isp", "ex_cn", "ex_intl", "ex_gpt", "ex_claude", "ex_cf"], dns: ["dns"], read: ["geo", "tz", "dns", "langs", "isp"], age: [],
  tier: ["gpu", "screen", "hz", "cpu", "screens"], fresh: ["browser"], when: ["tz"], power: ["battery"], prefs: ["sysui", "motion", "a11y"], stand: ["fpid"], theme: ["scheme"], adblock: ["adblock"], track: ["fpid", "rand"], job: ["fonts", "ext"],
};

// the disguise checks, one row each
export const CHECKS = ["tz", "lang", "syslang", "dns", "split", "webrtc", "rtt", "conn", "dc", "ua", "tamper", "fpb", "fp", "bot"];
// what the verdict counts by default (passing as elsewhere): every check but the fingerprint's, which says nothing
// about where someone is (the privacy scene counts it)
export const COUNTED = CHECKS.filter(id => id !== "fp");
// the connection's protocols: shown under the checks, judged the same way, not counted among them
export const PROTO = ["h3", "ech", "pq", "warp"];

// "fix these first" while a run goes: three placeholder rows, the height its list keeps (the page's todo())
export const TODO_SK = '<li class="sk"><i class="skl"></i><i class="skl"></i></li>'.repeat(3);
