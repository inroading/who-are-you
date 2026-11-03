// The counter behind "how common are you": one Durable Object for the whole site, holding numbers only. Per trait value
// (a system, a browser, the first 8 characters of a fingerprint hash), how many checks had it; per day, how each check
// came out. No address, no full fingerprint, no row for a single visit. Increments wait in memory and go to SQLite
// once a minute, so writes grow with the number of different values, not with traffic.
import { DurableObject } from "cloudflare:workers";
import { cleanSeen } from "./traits.mjs";

const KEEP_DAYS = 90;
const day = (t = Date.now()) => new Date(t).toISOString().slice(0, 10);

export class Tally extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.sql = ctx.storage.sql;
    this.sql.exec("CREATE TABLE IF NOT EXISTS counts (f TEXT NOT NULL, v TEXT NOT NULL, n INTEGER NOT NULL, PRIMARY KEY (f, v))");
    this.sql.exec("CREATE TABLE IF NOT EXISTS checks (day TEXT NOT NULL, id TEXT NOT NULL, lv TEXT NOT NULL, n INTEGER NOT NULL, PRIMARY KEY (day, id, lv))");
    this.pending = new Map();   // "f\0v" → increments not yet written
    this.pendingCk = new Map(); // "day\0id\0lv" → increments not yet written
    this.cache = new Map();     // "f\0v" → the stored count, as last read
    this.armed = false;
  }

  stored(k) {
    if (this.cache.has(k)) return this.cache.get(k);
    const [f, v] = k.split("\0"), r = this.sql.exec("SELECT n FROM counts WHERE f = ? AND v = ?", f, v).toArray()[0];
    if (this.cache.size > 200000) this.cache.clear();
    this.cache.set(k, r ? r.n : 0);
    return r ? r.n : 0;
  }
  count(f, v) { const k = f + "\0" + v; return this.stored(k) + (this.pending.get(k) || 0); }
  bump(map, k) { map.set(k, (map.get(k) || 0) + 1); }

  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/stats") return Response.json(this.stats());
    const seen = cleanSeen(await request.json().catch(() => null));
    if (!seen) return new Response(null, { status: 400 });
    if (seen.add) {
      this.bump(this.pending, "\0total");
      for (const [f, v] of Object.entries(seen.t)) this.bump(this.pending, f + "\0" + v);
      const d = day();
      for (const [id, lv] of Object.entries(seen.ck)) this.bump(this.pendingCk, d + "\0" + id + "\0" + lv);
      if (!this.armed) { this.armed = true; await this.ctx.storage.setAlarm(Date.now() + 60000); }
    }
    const n = {};
    for (const [f, v] of Object.entries(seen.t)) n[f] = this.count(f, v);
    return Response.json({ total: this.count("", "total"), n });
  }

  // once a minute: the increments into SQLite, and days past KEEP_DAYS out
  async alarm() {
    this.armed = false;
    const counts = [...this.pending], checks = [...this.pendingCk];
    this.pending = new Map(); this.pendingCk = new Map();
    this.ctx.storage.transactionSync(() => {
      for (const [k, n] of counts) {
        const [f, v] = k.split("\0");
        this.sql.exec("INSERT INTO counts (f, v, n) VALUES (?, ?, ?) ON CONFLICT (f, v) DO UPDATE SET n = n + excluded.n", f, v, n);
        if (this.cache.has(k)) this.cache.set(k, this.cache.get(k) + n);
      }
      for (const [k, n] of checks) {
        const [d, id, lv] = k.split("\0");
        this.sql.exec("INSERT INTO checks (day, id, lv, n) VALUES (?, ?, ?, ?) ON CONFLICT (day, id, lv) DO UPDATE SET n = n + excluded.n", d, id, lv, n);
      }
      this.sql.exec("DELETE FROM checks WHERE day < ?", day(Date.now() - KEEP_DAYS * 86400000));
    });
  }

  // every check's results per day (the last KEEP_DAYS days), and the number of checks counted
  stats() {
    const days = {};
    const add = (d, id, lv, n) => { ((days[d] ||= {})[id] ||= {})[lv] = (days[d][id][lv] || 0) + n; };
    for (const r of this.sql.exec("SELECT day, id, lv, n FROM checks ORDER BY day").toArray()) add(r.day, r.id, r.lv, r.n);
    for (const [k, n] of this.pendingCk) { const [d, id, lv] = k.split("\0"); add(d, id, lv, n); }
    return { total: this.count("", "total"), days };
  }
}
