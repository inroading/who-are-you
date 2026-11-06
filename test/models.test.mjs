// Which model a device is: Apple's from the screen, the chip and the iOS version; a PC's laptop or not; Android's
// bucket file; and the automation check taking an AI agent's clicks in.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { appleModel, pcKind, bucket, iosMajor } from "../src/models.mjs";
import { checks } from "../src/infer.mjs";

const IOS18 = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1";
const IOS26 = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1";
const IOS16 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1";

test("iOS version: Safari 26's frozen 18_6 reads as 26", () => {
  assert.equal(iosMajor(IOS26), 26);
  assert.equal(iosMajor(IOS18), 18);
});

test("iPhone: the screen leaves the models built with it, the iOS version drops the rest", () => {
  assert.equal(appleModel({ os: "iOS", ua: IOS26, w: 420, h: 912, dpr: 3 }).name, "iPhone Air");
  assert.deepEqual(appleModel({ os: "iOS", ua: IOS18, w: 393, h: 852, dpr: 3 }).list, ["iPhone 16", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro"]);
  // iOS 16 came out before the 15 and the 16: only the 14 Pro is left
  assert.equal(appleModel({ os: "iOS", ua: IOS16, w: 393, h: 852, dpr: 3 }).name, "iPhone 14 Pro");
  // iOS 26 no longer runs on the XS: the 11 Pro is left
  assert.equal(appleModel({ os: "iOS", ua: IOS26, w: 375, h: 812, dpr: 3 }).list.includes("iPhone XS"), false);
  // the same points at another pixel ratio are another phone
  assert.deepEqual(appleModel({ os: "iOS", ua: IOS18, w: 414, h: 896, dpr: 2 }).list, ["iPhone 11", "iPhone XR"]);
  // landscape reads the same; an unknown screen names nothing
  assert.equal(appleModel({ os: "iOS", ua: IOS26, w: 912, h: 420, dpr: 3 }).name, "iPhone Air");
  assert.equal(appleModel({ os: "iOS", ua: IOS26, w: 400, h: 900, dpr: 3 }), null);
});

test("Mac: the built-in display names the MacBook, Chromium's WebGL the chip", () => {
  assert.equal(appleModel({ os: "macOS", kind: "mac", w: 1512, h: 982, dpr: 2, gpu: "ANGLE (Apple, ANGLE Metal Renderer: Apple M3 Pro, Unspecified Version)" }).name, "MacBook Pro 14 · M3 Pro");
  assert.equal(appleModel({ os: "macOS", kind: "mac", w: 1470, h: 956, dpr: 2, gpu: "Apple GPU" }).name, "MacBook Air 13");
  assert.equal(appleModel({ os: "macOS", kind: "mac", w: 2560, h: 1440, dpr: 1, gpu: "ANGLE (Apple, ANGLE Metal Renderer: Apple M2, Unspecified Version)" }).name, "Mac · M2");
  assert.equal(appleModel({ os: "macOS", kind: "mac", w: 2560, h: 1440, dpr: 1, gpu: "Apple GPU" }), null);
  assert.equal(appleModel({ os: "Windows", kind: "pc", w: 1512, h: 982, dpr: 2 }), null);
});

test("PC: a battery that runs down or a laptop GPU makes a laptop; a desktop's battery says nothing", () => {
  assert.equal(pcKind({ battery: { level: 0.63, charging: false, chargingTime: Infinity } }), "laptop");
  assert.equal(pcKind({ battery: { level: 1, charging: true, chargingTime: 0 }, gpu: "ANGLE (NVIDIA, NVIDIA GeForce RTX 4060 Laptop GPU (0x000028E0) Direct3D11 vs_5_0 ps_5_0, D3D11)" }), "laptop");
  assert.equal(pcKind({ battery: { level: 1, charging: true, chargingTime: 0 }, gpu: "ANGLE (NVIDIA, NVIDIA GeForce RTX 4070 (0x00002786) Direct3D11 vs_5_0 ps_5_0, D3D11)" }), null);
  assert.equal(pcKind({}), null);
});

test("Android: a model code is in the file its bucket names", () => {
  const f = code => JSON.parse(readFileSync(new URL("../public/assets/m/" + bucket(code).toString(16).padStart(2, "0") + ".json", import.meta.url), "utf8"));
  assert.equal(f("SM-S928B")["SM-S928B"], "Samsung Galaxy S24 Ultra");
  assert.equal(bucket("sm-s928b"), bucket("SM-S928B"));
});

test("automation: an AI agent's or a script's clicks fail the check", () => {
  assert.equal(checks({ webdriver: false, agent: "agent" }).bot[1], "c_bot_agent");
  assert.equal(checks({ webdriver: false, agent: "script" }).bot[1], "c_bot_script");
  assert.equal(checks({ webdriver: false, agent: "human" }).bot[0], "ok");
  assert.equal(checks({ webdriver: true, agent: "human" }).bot[1], "c_bot_bad");
});
