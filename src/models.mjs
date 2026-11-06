// Which model a device is, from what any page reads without asking.
//   iPhone, iPad: the screen in points and the pixel ratio narrow it to the models built with that screen; the iOS
//     version drops the ones that came out later or can't run it. Apple makes several models per screen, so it is
//     often a short list, not one name. A new screen size (every September or so) needs a row here: until then the
//     page says "an iPhone" and the screen, never a wrong name.
//   Mac: Chromium names the chip (WebGL "Apple M3 Pro"); a built-in display's default size names the MacBook.
//   Android: Client Hints' model code, looked up in Google Play's device list (scripts/models.mjs writes it to
//     public/assets/m/, one small file per bucket()).
//   PC: a battery that runs down, or a "Laptop GPU", makes it a laptop.

// the file of public/assets/m/ an Android model code is in
export const bucket = code => { let h = 0; for (const ch of String(code).toUpperCase()) h = (h * 31 + ch.codePointAt(0)) >>> 0; return h & 255; };

// [points wide, points tall, pixel ratio, [model, the iOS it came with, the last iOS it runs (none: still current)], …]
const IPHONE = [
  [320, 568, 2, [["iPhone SE", 9, 15], ["iPhone 5s", 7, 12]]],
  [375, 667, 2, [["iPhone SE (3rd gen)", 15], ["iPhone SE (2nd gen)", 13], ["iPhone 8", 11, 16], ["iPhone 7", 10, 15], ["iPhone 6s", 9, 15]]],
  [414, 736, 3, [["iPhone 8 Plus", 11, 16], ["iPhone 7 Plus", 10, 15], ["iPhone 6s Plus", 9, 15]]],
  [375, 812, 3, [["iPhone 13 mini", 15], ["iPhone 12 mini", 14], ["iPhone 11 Pro", 13], ["iPhone XS", 12, 18], ["iPhone X", 11, 16]]],
  [414, 896, 2, [["iPhone 11", 13], ["iPhone XR", 12, 18]]],
  [414, 896, 3, [["iPhone 11 Pro Max", 13], ["iPhone XS Max", 12, 18]]],
  [390, 844, 3, [["iPhone 16e", 18], ["iPhone 14", 16], ["iPhone 13 Pro", 15], ["iPhone 13", 15], ["iPhone 12 Pro", 14], ["iPhone 12", 14]]],
  [428, 926, 3, [["iPhone 14 Plus", 16], ["iPhone 13 Pro Max", 15], ["iPhone 12 Pro Max", 14]]],
  [393, 852, 3, [["iPhone 16", 18], ["iPhone 15 Pro", 17], ["iPhone 15", 17], ["iPhone 14 Pro", 16]]],
  [430, 932, 3, [["iPhone 16 Plus", 18], ["iPhone 15 Pro Max", 17], ["iPhone 15 Plus", 17], ["iPhone 14 Pro Max", 16]]],
  [402, 874, 3, [["iPhone 17 Pro", 26], ["iPhone 17", 26], ["iPhone 16 Pro", 18]]],
  [440, 956, 3, [["iPhone 17 Pro Max", 26], ["iPhone 16 Pro Max", 18]]],
  [420, 912, 3, [["iPhone Air", 26]]],
];
const IPAD = [
  [768, 1024, 2, [["iPad mini (5th gen)", 12], ["iPad (6th gen)", 11, 17], ["iPad Air 2", 8, 15], ["iPad Pro 9.7", 9, 16]]],
  [744, 1133, 2, [["iPad mini (A17 Pro)", 18], ["iPad mini (6th gen)", 15]]],
  [810, 1080, 2, [["iPad (9th gen)", 15], ["iPad (8th gen)", 14], ["iPad (7th gen)", 13, 18]]],
  [834, 1112, 2, [["iPad Air (3rd gen)", 12], ["iPad Pro 10.5", 10, 17]]],
  [820, 1180, 2, [["iPad (A16)", 18], ["iPad Air 11 (M2/M3)", 17], ["iPad (10th gen)", 16], ["iPad Air (5th gen)", 15], ["iPad Air (4th gen)", 14]]],
  [834, 1194, 2, [["iPad Pro 11", 12]]],
  [834, 1210, 2, [["iPad Pro 11 (M4/M5)", 17]]],
  [1024, 1366, 2, [["iPad Air 13 (M2/M3)", 17], ["iPad Pro 12.9", 9]]],
  [1032, 1376, 2, [["iPad Pro 13 (M4/M5)", 17]]],
];
// a MacBook's built-in display at its default size, in points (pixel ratio 2)
const MAC = [
  [1470, 956, "MacBook Air 13"], [1710, 1112, "MacBook Air 15"], [1512, 982, "MacBook Pro 14"], [1728, 1117, "MacBook Pro 16"],
  [1536, 960, "MacBook Pro 16"], [1440, 900, "MacBook Air 13 / MacBook Pro 13"], [2240, 1260, "iMac 24"],
];

// the iOS major version: Safari 26 freezes the "OS 18_6" in its user agent and tells the real one only in Version/
export function iosMajor(ua = "") {
  const os = +((ua.match(/OS (\d+)[_.]/) || [])[1] || 0), ver = +((ua.match(/Version\/(\d+)/) || [])[1] || 0);
  return ver >= 26 ? Math.max(os, ver) : os;
}

// { name, list }: one name when the screen leaves one model, else the models it leaves, newest first;
// null when it isn't an Apple device, or the screen matches none (a new model, or display zoom)
export function appleModel({ kind, os, ua = "", w, h, dpr = 1, gpu = "" }) {
  if (os === "iOS" || os === "iPadOS") {
    const a = Math.min(w, h), b = Math.max(w, h), r = Math.round(dpr), v = iosMajor(ua);
    const row = (os === "iOS" ? IPHONE : IPAD).find(([x, y, p]) => x === a && y === b && p === r);
    if (!row) return null;
    let list = row[3].filter(([, from, to]) => !v || (v >= from && (!to || v <= to))).map(([n]) => n);
    if (!list.length) list = row[3].map(([n]) => n);
    return { name: list.length === 1 ? list[0] : null, list };
  }
  if (os === "macOS" && kind === "mac") {
    const chip = (String(gpu).match(/\bApple (M\d+(?: (?:Pro|Max|Ultra))?)\b/) || [])[1] || null;
    const intel = /Intel|AMD|Radeon/.test(gpu);
    const row = Math.round(dpr) === 2 && MAC.find(([x, y]) => x === w && y === h);
    // (the M-series MacBook Air 13 has the notch; a 1440×900 one with an M2 or later chip would be a scaled display)
    const book = row ? row[2] : null;
    const name = book ? book + (chip ? " · " + chip : intel ? " · Intel" : "") : chip ? "Mac · " + chip : null;
    return name ? { name, list: [name] } : null;
  }
  return null;
}

// a laptop or a desktop, when something tells: a battery that isn't full and charging forever (a desktop's), a GPU
// sold as a laptop part, a Windows on Arm chip (only in laptops and tablets so far)
export function pcKind({ battery, gpu = "" }) {
  if (/Laptop GPU|Mobile|Max-Q|Adreno|Snapdragon/i.test(gpu)) return "laptop";
  if (battery && !(battery.level === 1 && battery.charging && battery.chargingTime === 0)) return "laptop";
  return null;
}
