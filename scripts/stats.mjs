// How each check comes out across every visitor, against how often visitors report it wrong: the checks to look at
// first are the ones that warn a lot and show up in many reports.
//   npm run stats          the last 7 days
//   npm run stats -- 30    30 days back
// Results come from /api/stats (anonymous counts, src/tally.mjs). Reports are the "report" issues of the private
// repository yt1988/1ms-shell, read with the gh CLI (skipped when gh can't reach it); each one carries the checks as
// the reporter saw them.
import { execFileSync } from "node:child_process";
import { CHECKS, PROTO } from "../src/sniffers.mjs";

const days = Math.max(1, +process.argv[2] || 7);
const since = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);
const res = await fetch("https://who.1ms.dog/api/stats").then(r => r.ok ? r.json() : null).catch(() => null);
if (!res) { console.error("Couldn't read https://who.1ms.dog/api/stats."); process.exit(1); }

// per check: how many checks ended ok / warn / bad / info in the window
const ids = [...CHECKS, ...PROTO], sum = Object.fromEntries(ids.map(id => [id, { ok: 0, warn: 0, bad: 0, info: 0 }]));
let n = 0;
for (const [d, perId] of Object.entries(res.days || {})) {
  if (d < since) continue;
  for (const [id, lv] of Object.entries(perId)) if (sum[id]) for (const [k, c] of Object.entries(lv)) sum[id][k] = (sum[id][k] || 0) + c;
}
n = Math.max(0, ...ids.map(id => Object.values(sum[id]).reduce((a, b) => a + b, 0)));

// the reports in the window, and per check how many had it warn or fail
let reports = null;
try {
  const out = execFileSync("gh", ["issue", "list", "--repo", "yt1988/1ms-shell", "--label", "tool:who", "--state", "all", "--limit", "500",
    "--search", `created:>=${since}`, "--json", "body"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  reports = { n: 0, by: Object.fromEntries(ids.map(id => [id, 0])) };
  for (const { body } of JSON.parse(out)) {
    const m = body.match(/\{"portrait":[\s\S]*\}\}/);
    let ck = null;
    try { ck = m && JSON.parse(m[0]).portrait.ck; } catch (e) {}
    if (!ck) continue;
    reports.n++;
    for (const id of ids) if (ck[id] && (ck[id][0] === "warn" || ck[id][0] === "bad")) reports.by[id]++;
  }
} catch (e) { reports = null; }

const pct = (a, b) => b ? (100 * a / b).toFixed(1) + "%" : "–";
console.log(`who · the last ${days} day(s): ${n.toLocaleString("en")} checks counted (${(res.total || 0).toLocaleString("en")} in all)` +
  (reports ? `, ${reports.n} report(s)` : ", reports not read (gh)"));
console.log("");
const rows = ids.map(id => {
  const s = sum[id], all = s.ok + s.warn + s.bad + s.info, flagged = s.warn + s.bad;
  const inReports = reports ? reports.by[id] : null;
  // how much more often a check is flagged among reporters than among everyone: the higher, the likelier it misfires
  const lift = reports && reports.n && all && flagged ? (inReports / reports.n) / (flagged / all) : null;
  return { id, all, warn: s.warn, bad: s.bad, flagged: pct(flagged, all), inReports, lift };
}).sort((a, b) => (b.lift || 0) - (a.lift || 0) || b.warn + b.bad - (a.warn + a.bad));
const pad = (s, w) => String(s).padStart(w);
console.log("check     flagged    warn     bad   in reports   × vs everyone");
for (const r of rows) console.log(`${r.id.padEnd(8)} ${pad(r.flagged, 8)} ${pad(r.warn, 7)} ${pad(r.bad, 7)} ${pad(r.inReports ?? "–", 12)} ${pad(r.lift ? r.lift.toFixed(1) + "×" : "–", 14)}`);
console.log("\n\"× vs everyone\": how much more often reporters had the check flagged than everyone did. Well above 1, and");
console.log("with several reports, that check is worth a look: its wording, or its rule.");
