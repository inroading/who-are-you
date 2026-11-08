// What the page script needs that older browsers lack: the in-app browsers of Chrome 70 and Safari 13 vintage that
// visitors still open links in (the build lowers the syntax to that level, scripts/build.mjs; this fills the APIs).
// Imported first by app.js, so it runs before anything else.

// Chrome 73, Safari 12.1
if (!Object.fromEntries) Object.fromEntries = it => { const o = {}; for (const [k, v] of it) o[k] = v; return o; };
// Chrome 103, Safari 16: a fetch that gives up after ms
if (window.AbortSignal && !AbortSignal.timeout && window.AbortController)
  AbortSignal.timeout = ms => { const c = new AbortController(); setTimeout(() => c.abort(), ms); return c.signal; };
