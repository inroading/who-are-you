#!/usr/bin/env node
// Smoke test in a real browser: serves public/ (with a stand-in for /api/me and Cloudflare's trace), opens every
// language page in headless Chrome and checks that the page script ran through: no script errors, every sniffer row
// filled, every blank of the portrait filled with no placeholder or "undefined" left, every check judged. Then it
// shares the English portrait (link and image card) and opens the link: the link must carry no address, city,
// network or fingerprint, and the shared view must show the portrait with the city and fingerprint masked. Last, every
// topic page in every language: its focus panel must get a verdict and fill every row.
// Requests to other sites (the exit and DNS probes, analytics) are cut off at once, so those rows read "couldn't read"
// right away instead of after their timeouts; a row must not stay "…". Several pages run at a time; the topic pages
// are a sample.
// Usage: node scripts/smoke.mjs            (finds Chrome or Edge; CHROME_PATH=… to pick one)
//        node scripts/smoke.mjs quick      the language pages and the share only (about 20 s), for a small change
import { createServer } from "node:http";
import { readFile, access } from "node:fs/promises";
import { extname } from "node:path";
import puppeteer from "puppeteer-core";
import { LANGS } from "./build.mjs";
import { SNIFFERS, BLANKS, CHECKS, PROTO } from "../src/sniffers.mjs";
import { decode, SLUG, parsePath } from "../src/share.mjs";
import { PAGES } from "../src/pages.mjs";

const pub = new URL("../public/", import.meta.url);
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2", ".ico": "image/x-icon" };
const ME = { ip: "203.0.113.7", v: 4, ptr: null, h: { "user-agent": "smoke", "accept-language": "en-US" },
  cf: { country: "JP", city: "Tokyo", region: "Tokyo", latitude: "35.69", longitude: "139.69", timezone: "Asia/Tokyo", asn: 2516, asOrganization: "KDDI Corporation",
    colo: "NRT", httpProtocol: "HTTP/2", tlsVersion: "TLSv1.3", tlsCipher: "AEAD-AES128-GCM-SHA256", clientTcpRtt: 12 } };

const handle = async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (path === "/api/stats") { const d = new Date().toISOString().slice(0, 10); res.writeHead(200, { "content-type": "application/json" }); return res.end(JSON.stringify({ total: 5000, days: { [d]: { tz: { ok: 600, bad: 400 }, split: { ok: 500, warn: 500 }, dns: { ok: 800, bad: 200 } } }, top: { os: [["Windows 11", 2000]], tz: [["Asia/Shanghai", 1500]] } })); }
  if (path === "/api/me") { res.writeHead(200, { "content-type": "application/json" }); return res.end(JSON.stringify({ ...ME, at: Date.now() })); }
  // a shared portrait: the Worker serves its language's page (here without the preview tags it adds)
  const r = parsePath(path);
  if (r) {
    const P = decode(r.code), slug = P && SLUG[r.lang || P.l];
    res.writeHead(P ? 200 : 404, { "content-type": TYPES[".html"] });
    return res.end(P ? await readFile(new URL((slug ? slug + "/" : "") + "index.html", pub)) : "");
  }
  if (path === "/cdn-cgi/trace") { res.writeHead(200, { "content-type": "text/plain" }); return res.end("ip=203.0.113.7\nkex=X25519MLKEM768\nsni=plaintext\nwarp=off\ngateway=off\n"); }
  try {
    const body = await readFile(new URL("." + (path.endsWith("/") ? path + "index.html" : path), pub));
    res.writeHead(200, { "content-type": TYPES[extname(path)] || (path.endsWith("/") ? TYPES[".html"] : "application/octet-stream") }); res.end(body);
  } catch (e) { res.writeHead(404); res.end(); }
};
// one server per page running at a time, each on its own port: Chrome keeps six connections per host and port, and six
// pages sharing one would wait on each other
const N = 6, servers = [];
for (let i = 0; i < N; i++) { const s = createServer(handle); await new Promise(r => s.listen(0, "127.0.0.1", r)); servers.push(s); }
const bases = servers.map(s => `http://127.0.0.1:${s.address().port}`), base = bases[0];

const CANDIDATES = [process.env.CHROME_PATH, "C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome", "/usr/bin/chromium-browser", "/usr/bin/chromium", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"].filter(Boolean);
let exe = null;
for (const c of CANDIDATES) { try { await access(c); exe = c; break; } catch (e) {} }
if (!exe) { console.error("No Chrome or Edge found; set CHROME_PATH."); process.exit(1); }
const browser = await puppeteer.launch({ executablePath: exe, headless: true, args: ["--no-sandbox", "--use-fake-ui-for-media-stream",
  // pages run side by side: none is throttled for being in the background
  "--disable-background-timer-throttling", "--disable-renderer-backgrounding", "--disable-backgrounding-occluded-windows",
  // only these servers answer: every other name fails to resolve at once, as a blocked network would (in the browser, not
  // through request interception, which stalls with several pages at a time)
  "--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1"] });

const failures = [];
const fail = (where, what) => { failures.push(where + ": " + what); console.log("  ✖ " + where + ": " + what); };
const quick = process.argv.includes("quick");
// a few at a time: each page spends most of its run waiting
// (each runner on its own server: fn gets the item and that server's address)
async function pool(items, n, fn) { const q = [...items]; await Promise.all(Array.from({ length: n }, async (_, i) => { while (q.length) await fn(q.shift(), bases[i]); })); }
async function open(url) {
  const page = await browser.newPage(), errors = [];
  page.on("pageerror", e => errors.push(String(e.message || e)));
  page.on("console", m => { if (m.type() === "error" && !/Failed to load resource|ERR_NAME_NOT_RESOLVED/.test(m.text())) errors.push("console: " + m.text()); });
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(url, { waitUntil: "load" });
  return { page, errors };
}

await pool(LANGS, N, async ([lang, slug], base) => {
  console.log(lang);
  const { page, errors } = await open(`${base}/${slug ? slug + "/" : ""}`);
  // done when the rerun button is enabled again (the run, WebRTC included, is over)
  await page.waitForFunction(() => !document.querySelector("#rerun").disabled, { timeout: 30000 }).catch(() => fail(lang, "the run never finished"));
  const r = await page.evaluate(() => ({
    rows: [...document.querySelectorAll(".pr[data-s]")].map(x => [x.dataset.s, x.querySelector(".pa").textContent]),
    waiting: document.querySelectorAll(".bl.wait").length, blanks: document.querySelectorAll(".bl[data-b]").length,
    story: document.querySelector("#story").textContent, checks: [...document.querySelectorAll(".ckr")].map(x => [x.dataset.c, x.className]),
    num: document.querySelector("#mNum").textContent, fp: document.querySelector("#fpId").textContent, ret: document.querySelector("#fpRet").textContent,
  }));
  for (const e of errors) fail(lang, "script error: " + e);
  if (r.rows.length !== SNIFFERS.length) fail(lang, `${r.rows.length} rows, expected ${SNIFFERS.length}`);
  for (const [id, v] of r.rows) if (!v.trim() || v === "…") fail(lang, `row ${id} not filled ("${v}")`);
  if (r.blanks !== Object.keys(BLANKS).length) fail(lang, `${r.blanks} blanks, expected ${Object.keys(BLANKS).length}`);
  if (r.waiting) fail(lang, `${r.waiting} blanks still waiting`);
  if (/\{\w+\}|undefined|null|NaN/.test(r.story)) fail(lang, "portrait has a leftover: " + r.story.match(/.{0,20}(\{\w+\}|undefined|null|NaN).{0,20}/)[0]);
  for (const [id, cls] of r.checks) if (!/st-/.test(cls)) fail(lang, `check ${id} not judged`);
  if (r.checks.length !== CHECKS.length + PROTO.length) fail(lang, `${r.checks.length} checks, expected ${CHECKS.length + PROTO.length}`);
  if (!/^\d+$/.test(r.num)) fail(lang, `count "${r.num}"`);
  if (!r.fp.trim() || !r.ret.trim()) fail(lang, "ID card not filled");

  if (lang === "zh-CN") {
    // share (1ms.dog's share dialog), then open the link as someone else would
    await page.click("#share");
    // the link, in this language's folder, and the image card, made in the page
    await page.waitForFunction(() => { const d = document.querySelector("dialog.ms-share"); return d && d.open && /\/zh-cn\/r\/\d+\./.test(d.querySelector(".ms-share-link input").value) && d.querySelector(".ms-share-img").src; }, { timeout: 8000 })
      .catch(() => fail("share", "no link or no image"));
    const link = await page.$eval("dialog.ms-share .ms-share-link input", x => x.value), P = decode(link.split("/r/")[1] || "");
    if (!P) fail("share", "the link doesn't decode");
    else {
      if (/203\.0\.113\.7|Tokyo|KDDI/.test(JSON.stringify(P))) fail("share", "the link carries the address, city or network");
      if ("fp" in P || "x" in P) fail("share", "the link carries the fingerprint");
    }
    const s = await open(link);
    await s.page.waitForSelector("html.shared", { timeout: 5000 }).catch(() => fail("share", "shared view not shown"));
    await s.page.waitForSelector(".ms-recv", { timeout: 5000 }).catch(() => {});   // the banner comes with the component
    const v = await s.page.evaluate(() => ({ waiting: document.querySelectorAll(".bl.wait").length, city: document.querySelector('.bl[data-b="city"]').textContent, fp: document.querySelector("#fpId").textContent,
      story: document.querySelector("#story").textContent, mine: !document.querySelector("#mine").hidden,
      banner: !!document.querySelector(".ms-recv .ms-recv-b") }));
    for (const e of s.errors) fail("share", "script error: " + e);
    if (v.waiting) fail("share", `${v.waiting} blanks still waiting`);
    if (v.city !== "•••") fail("share", `city shows "${v.city}"`);
    if (v.fp !== "•••") fail("share", `fingerprint shows "${v.fp}"`);
    if (/\{\w+\}|undefined|null|NaN/.test(v.story)) fail("share", "portrait has a leftover");
    if (!v.mine) fail("share", "no \"check mine\" button");
    if (!v.banner) fail("share", "no banner from the share component above the shared portrait");
    await s.page.close();
  }
  await page.close();
});

// the topic pages: their focus panel fills with the verdict and every row it repeats
// (a sample: every topic in Chinese and English, and one topic in every language; their texts in every language are the
// unit tests', and the page script is the same in all of them)
const SAMPLE = [...Object.keys(PAGES).flatMap(topic => LANGS.filter(([l]) => l === "zh-CN" || l === "en").map(l => [topic, ...l])),
  ...LANGS.filter(([l]) => l !== "zh-CN" && l !== "en").map(l => ["dns-leak", ...l])];
await pool(quick ? [] : SAMPLE, 3, async ([topic, lang, slug], base) => {
  const where = `${lang} ${topic}`;
  const t0 = Date.now();
  // (?lang: the root language's pages would otherwise follow the language another page of this host remembered)
  const { page, errors } = await open(`${base}/${slug ? slug + "/" : ""}${topic}/?lang=${lang}`);
  if (PAGES[topic].stats) {
    await page.waitForFunction(() => /\d/.test(document.querySelector("#crN").textContent) && document.querySelectorAll("#crBars li").length, { timeout: 15000 }).catch(() => fail(where, "the numbers never came"));
    for (const e of errors) fail(where, "script error: " + e);
    await page.close();
    return;
  }
  // (90 s: once in a while a page takes a minute when several run; slow ones are named below, a stuck one fails)
  await page.waitForFunction(() => !document.querySelector("#rerun").disabled, { timeout: 90000 })
    .catch(async () => fail(where, "the run never finished; still waiting: " + ((await page.evaluate(() => [...document.querySelectorAll(".pr.wait")].map(x => x.dataset.s).join(" "))) || "no row")));
  const ms = Date.now() - t0;
  if (ms > 30000) console.log("  … " + where + " took " + Math.round(ms / 1000) + " s");
  const f = await page.evaluate(() => ({ v: document.querySelector("#focusV").className, rows: [...document.querySelectorAll(".focus-rows [data-f]")].map(x => [x.dataset.f, x.querySelector("b").textContent]) }));
  for (const e of errors) fail(where, "script error: " + e);
  if (!/st-/.test(f.v)) fail(where, "no verdict in the focus panel");
  for (const [id, v] of f.rows) if (!v.trim() || v === "…") fail(where, `focus row ${id} not filled`);
  // only its own topic: the way to the main page for the whole test, and none of the main page's other sniffers run
  const own = await page.evaluate(() => ({ all: (document.querySelector(".focus-all") || {}).pathname || null,
    ran: [...document.querySelectorAll(".pr[data-s]:not(.wait)")].map(r => r.dataset.s).filter(s => !document.querySelector(`.focus-rows [data-f="${s}"]`)) }));
  if (!own.all || own.all !== new URL(base + "/" + (slug ? slug + "/" : "")).pathname) fail(where, `no link to the whole test on the main page (${own.all})`);
  const extra = own.ran.filter(s => ["battery", "media", "codecs", "drm", "perms", "webgpu", "mathfp", "emoji", "heap", "sysui", "bt", "bio"].includes(s));
  if (extra.length) fail(where, "ran sniffers it doesn't need: " + extra.join(", "));
  await page.close();
});
await browser.close();
servers.forEach(s => s.close());
console.log(failures.length ? `\n${failures.length} failures` : "\nall ok");
process.exit(failures.length ? 1 : 0);
