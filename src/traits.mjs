// What the page counts to tell how common a visitor is: one value per trait, named by the sniffer row that shows it.
// Coarse values as they are (a system, a browser, a screen); fingerprint hashes cut to their first 8 characters.
// Used by the page (what to send, which rows get a "common / rare / only you" tag) and the Worker (what it accepts).
import { CHECKS, PROTO } from "./sniffers.mjs";

export const TRAITS = ["os", "browser", "screen", "gpu", "langs", "tz", "fontfp", "canvas", "webgl", "audio", "mathfp", "emoji", "hwdec", "fpid"];
const HASHED = new Set(["fontfp", "canvas", "webgl", "audio", "mathfp", "fpid"]);
const LEVELS = new Set(["ok", "warn", "bad", "info"]);
const IDS = new Set([...CHECKS, ...PROTO]);

// a body the Worker takes: { add, t: { trait: value }, ck: { check: level } }, anything else dropped; null if unusable
export function cleanSeen(b) {
  if (!b || typeof b !== "object" || !b.t || typeof b.t !== "object") return null;
  const t = {}, ck = {};
  for (const f of TRAITS) {
    const v = b.t[f];
    if (typeof v !== "string" || !v || v.length > 80) continue;
    if (HASHED.has(f) && !/^[0-9a-f]{8}$/.test(v)) continue;
    t[f] = v;
  }
  if (b.ck && typeof b.ck === "object") for (const [id, lv] of Object.entries(b.ck)) if (IDS.has(id) && LEVELS.has(lv)) ck[id] = lv;
  return Object.keys(t).length ? { add: b.add === true, t, ck } : null;
}

// how common a value is among `total` checks: only you, rare (under 2%), or common; null until there are enough checks
export const MIN_TOTAL = 1000;
export function rarity(n, total) {
  if (!total || total < MIN_TOTAL || n == null) return null;
  return n <= 1 ? "uniq" : n / total < 0.02 ? "rare" : "common";
}
