#!/usr/bin/env node
// Writes public/assets/m/<00…ff>.json: Android model codes (what Client Hints' "model" reports, "SM-S928B") with their
// retail names ("Samsung Galaxy S24 Ultra"). Split into 256 files by src/models.mjs bucket(), so a phone loads only
// the one holding its own code (a few KB), and nothing else does. Two sources:
//   Google Play's list of supported devices: every phone with Google's services, worldwide
//   KHwang9883/MobileModels (CC BY-NC-SA 4.0): Chinese brands' own lists, with the phones sold in China without
//     Google's services (Huawei since 2019, vivo's and others' China models); fills what Google's list lacks
// The files are a derived work of MobileModels, so they carry its license (public/assets/m/LICENSE.md), not the
// repository's MIT.
// Usage: node scripts/models.mjs   (fetches the current lists; both add new phones as they ship: monthly is plenty)
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { bucket } from "../src/models.mjs";

const get = async (url, as = "text") => { const r = await fetch(url); if (!r.ok) throw new Error(url + ": HTTP " + r.status); return r[as](); };
const map = {};

// Google Play: "Retail Branding","Marketing Name","Device","Model", in UTF-16 with a byte order mark
const csv = new TextDecoder("utf-16le").decode(await get("https://storage.googleapis.com/play_public/supported_devices.csv", "arrayBuffer")).replace(/^﻿/, "");
let google = 0;
for (const line of csv.split(/\r?\n/).slice(1)) {
  const c = [...line.matchAll(/"((?:[^"]|"")*)"/g)].map(m => m[1].replace(/""/g, '"').trim());
  if (c.length < 4) continue;
  let [brand, name, , model] = c;
  if (!name || !model) continue;
  if (name.toLowerCase().startsWith(brand.toLowerCase())) brand = "";
  // (spelled the way the brands spell themselves)
  brand = ({ Vivo: "vivo", Oppo: "OPPO" })[brand] || brand;
  const full = (brand ? brand + " " : "") + name;
  // (a row that only repeats the code says nothing more)
  if (full.toUpperCase() === model.toUpperCase()) continue;
  map[model.toUpperCase()] = full; google++;
}

// MobileModels: brands/<brand>.md, lines like "`ALN-AL00` `ALN-AL80`: HUAWEI Mate 60 Pro". The name loses what only
// tells versions apart ("国行版", "移动版", "Wi-Fi 版", "(12GB + 256GB)"), so it reads the same in every language.
const REPO = "https://raw.githubusercontent.com/KHwang9883/MobileModels/master/";
const list = await get("https://api.github.com/repos/KHwang9883/MobileModels/contents/brands", "json");
const files = list.map(f => f.name).filter(n => /\.md$/.test(n) && !/^(apple|mitv)|wear/.test(n));
let cn = 0;
for (const f of files) {
  const md = await get(REPO + "brands/" + f);
  for (const line of md.split(/\r?\n/)) {
    const m = line.match(/^((?:`[^`]+`\s*)+):\s*(.+)$/);
    if (!m) continue;
    const name = m[2].split(/\s+(?=\S*版(?:\s|$))|\s*[(（]/)[0].trim();
    if (!name) continue;
    for (const [, code] of m[1].matchAll(/`([^`]+)`/g)) {
      const k = code.trim().toUpperCase();
      if (!k || map[k] || k === name.toUpperCase()) continue;
      map[k] = name; cn++;
    }
  }
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
await writeFile(new URL("LICENSE.md", dir), `# Device model names

These files map Android model codes to the names phones are sold under. Written by scripts/models.mjs from:

- Google Play's list of supported devices: https://storage.googleapis.com/play_public/supported_devices.csv
- MobileModels by KHwang9883 (https://github.com/KHwang9883/MobileModels), licensed under CC BY-NC-SA 4.0

As a work derived from MobileModels, these files are licensed under CC BY-NC-SA 4.0
(https://creativecommons.org/licenses/by-nc-sa/4.0/): attribution, non-commercial use only, shared alike.
The rest of this repository stays under its MIT license.
`);
console.log(Object.keys(map).length + " models in 256 files: " + google + " from Google Play, " + cn + " more from MobileModels");
