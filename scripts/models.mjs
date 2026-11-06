#!/usr/bin/env node
// Writes public/assets/m/<00…ff>.json: Android model codes (what Client Hints' "model" reports, "SM-S928B") with their
// retail names ("Samsung Galaxy S24 Ultra"), from Google Play's list of supported devices. Split into 256 files by
// src/models.mjs bucket(), so a phone loads only the one holding its own code (a few KB), and nothing else does.
// Usage: node scripts/models.mjs   (fetches the current list; Google adds new phones as they ship, so run it now and
// then: monthly is plenty)
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { bucket } from "../src/models.mjs";

const URL_ = "https://storage.googleapis.com/play_public/supported_devices.csv";
const r = await fetch(URL_);
if (!r.ok) throw new Error("supported_devices.csv: HTTP " + r.status);
// (UTF-16 with a byte order mark)
const text = new TextDecoder("utf-16le").decode(await r.arrayBuffer()).replace(/^﻿/, "");
const rows = text.split(/\r?\n/).slice(1);
const map = {};
for (const line of rows) {
  const c = [...line.matchAll(/"((?:[^"]|"")*)"/g)].map(m => m[1].replace(/""/g, '"').trim());
  if (c.length < 4) continue;
  let [brand, name, , model] = c;
  if (!name || !model) continue;
  if (name.toLowerCase().startsWith(brand.toLowerCase())) brand = "";
  const full = (brand ? brand + " " : "") + name;
  // (a row that only repeats the code says nothing more)
  if (full.toUpperCase() === model.toUpperCase()) continue;
  map[model.toUpperCase()] = full;
}
const out = Array.from({ length: 256 }, () => ({}));
for (const [k, v] of Object.entries(map)) out[bucket(k)][k] = v;
const dir = new URL("../public/assets/m/", import.meta.url);
await mkdir(dir, { recursive: true });
for (const f of await readdir(dir)) await rm(new URL(f, dir));
for (let i = 0; i < 256; i++) {
  const keys = Object.keys(out[i]).sort();
  await writeFile(new URL(i.toString(16).padStart(2, "0") + ".json", dir), JSON.stringify(Object.fromEntries(keys.map(k => [k, out[i][k]]))));
}
console.log(Object.keys(map).length + " models in 256 files");
