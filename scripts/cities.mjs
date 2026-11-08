#!/usr/bin/env node
// Writes public/assets/city/<lang>.json: city names as Cloudflare gives them (English: "Tokyo", "Shanghai") in the
// languages that write them in another script (ja, ko, zh-CN, zh-TW, ru), for cities of 300,000 people or more, from
// Wikidata (CC0). The page loads its own language's file, and only on those pages; a city not in it stays as given.
// Usage: node scripts/cities.mjs   (rarely: names don't change much)
import { mkdir, writeFile } from "node:fs/promises";

const CLASSES = ["Q515", "Q1549591", "Q1637706", "Q200250", "Q748149", "Q1615742", "Q174844", "Q5119", "Q1093829", "Q494721",
  "Q15284", "Q1048835", "Q15063032", "Q29946056", "Q2225003", "Q13218391", "Q208511", "Q51929311"];
const LANGS = { ja: "ja", ko: "ko", "zh-cn": "zh-hans", "zh-tw": "zh-hant", ru: "ru" };
// (one query per class: all at once is more than the query service allows in its time limit)
const query = k => `SELECT ?c ?en ${Object.keys(LANGS).map((_, i) => "?l" + i).join(" ")} ?pop WHERE {
  ?c wdt:P31 wd:${k}; wdt:P1082 ?pop. FILTER(?pop > 300000)
  ?c rdfs:label ?en FILTER(lang(?en) = "en")
  ${Object.values(LANGS).map((l, i) => `OPTIONAL { ?c rdfs:label ?l${i} FILTER(lang(?l${i}) = "${l}") }`).join(" ")}
}`;
const rows = [];
for (const k of CLASSES) {
  let r;
  for (let tries = 0; tries < 3; tries++) {
    r = await fetch("https://query.wikidata.org/sparql?query=" + encodeURIComponent(query(k)), {
      headers: { accept: "application/sparql-results+json", "user-agent": "who-are-you-build/1.0 (https://github.com/yt1988/who-are-you)" } });
    if (r.ok) break;
  }
  if (!r.ok) throw new Error("Wikidata " + k + ": HTTP " + r.status);
  rows.push(...(await r.json()).results.bindings);
}

// the bigger city wins a shared English name ("Tokyo": the metropolis over the special wards)
const best = new Map();
for (const b of rows) {
  const k = b.en.value.toLowerCase(), pop = +b.pop.value;
  if (!best.has(k) || best.get(k).pop < pop) best.set(k, { pop, b });
}
// what only says what kind of city it is: "上海市" → "上海", "서울특별시" → "서울", "東京都" → "東京" (kept when one
// character would be left: "京都", "成都")
const SUFFIX = { ja: /(特別市|広域市|市|都)$/, ko: /(특별자치시|특별시|광역시|시|도)$/, "zh-cn": /(市|都)$/, "zh-tw": /(市|都)$/, ru: null };
const trim = (s, re) => { if (!re) return s; const t = s.replace(re, ""); return [...t].length >= 2 ? t : s; };
// names Wikidata gives in their long official form
const OVERRIDE = { frankfurt: { ja: "フランクフルト", ko: "프랑크푸르트", "zh-cn": "法兰克福", "zh-tw": "法蘭克福" },
  "frankfurt am main": { ja: "フランクフルト", ko: "프랑크푸르트", "zh-cn": "法兰克福", "zh-tw": "法蘭克福" },
  washington: { ja: "ワシントン", ko: "워싱턴", "zh-cn": "华盛顿", "zh-tw": "華盛頓" } };

// Cloudflare's name where it differs from Wikidata's English label
const ALIAS = { "new york": "new york city", "frankfurt am main": "frankfurt", "washington": "washington, d.c." };
for (const [cf, wd] of Object.entries(ALIAS)) if (!best.has(cf) && best.has(wd)) best.set(cf, best.get(wd));
for (const k of Object.keys(OVERRIDE)) if (!best.has(k)) best.set(k, { pop: 0, b: {} });

const dir = new URL("../public/assets/city/", import.meta.url);
await mkdir(dir, { recursive: true });
const keys = [...best.keys()].sort();
for (const [i, lang] of Object.keys(LANGS).entries()) {
  const out = {};
  for (const k of keys) {
    const v = (OVERRIDE[k] && OVERRIDE[k][lang]) || (best.get(k).b["l" + i] || {}).value;
    if (!v) continue;
    const name = trim(v, SUFFIX[lang]);
    if (name.toLowerCase() !== k) out[k] = name;
  }
  await writeFile(new URL(lang + ".json", dir), JSON.stringify(out));
  console.log(lang, Object.keys(out).length);
}
