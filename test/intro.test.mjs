import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const app = await readFile(new URL("../src/app.js", import.meta.url), "utf8");
const intro = app.slice(app.indexOf("  function paintIntro("), app.indexOf("  function paint(P, shared)"));
const blankKeys = ["nat", "city", "lang", "tz", "clock"];
function fixture() {
  const calls = [], classes = {};
  const context = {
    esc: x => x, t: (k, v) => v ? `${k}:${JSON.stringify(v)}` : k,
    flagged: (c, text) => c + ":" + text, country: c => c, place: c => c ? [c] : [],
    language: x => x, tzLabel: x => x,
    BLANKS: Object.fromEntries(blankKeys.map(k => [k, [k]])),
    BL: { city: { classList: { toggle: (k, value) => { classes[k] = value; } } } },
    blank: (...args) => calls.push(args),
    P: { nat: "JP", natFrom: ["langs"], cc: "JP", city: "Tokyo", langs: ["ja-JP"], tz: "Asia/Tokyo", h12: false },
  };
  vm.createContext(context);
  vm.runInContext(intro, context);
  return { context, calls, classes };
}

test("progressive intro paints only settled fields without finalization side effects", () => {
  const { context, calls } = fixture();
  vm.runInContext('paintIntro(P, ["lang", "tz", "clock"]);', context);
  assert.deepEqual(calls.map(c => c[0]), ["lang", "tz", "clock"]);
  calls.length = 0;
  vm.runInContext('paintIntro(P, ["city"]);', context);
  assert.deepEqual(calls.map(c => c[0]), ["city"]);
  calls.length = 0;
  vm.runInContext('paintIntro(P, ["nat"]);', context);
  assert.deepEqual(calls.map(c => c[0]), ["nat"]);
  // No mocks for idCard, returnVisit, storage, history, sharing or judge exist here: calling one fails.
  assert.doesNotMatch(intro, /idCard\(|returnVisit\(|judge\(|minHeight|\.disabled\s*=/);
});

test("final and shared intro reuse the same templates, preserving privacy and RFP wording", () => {
  const { context, calls, classes } = fixture();
  vm.runInContext('paintIntro(P);', context);
  assert.deepEqual(calls.map(c => c[0]), blankKeys);
  assert.match(calls[0][1], /pt_nat_soft/);
  calls.length = 0;
  vm.runInContext('P.city = null; P.rf = true; paintIntro(P, undefined, true);', context);
  assert.equal(calls.find(c => c[0] === "city")[1], "masked");
  assert.equal(calls.find(c => c[0] === "city")[3], "masked_why");
  assert.equal(calls.find(c => c[0] === "tz")[1], "pt_tz_rfp");
  assert.equal(classes.hid, true);
  assert.match(app, /function paint\(P, shared\)[\s\S]*?paintIntro\(P, undefined, shared\);/);
});

function deferred() { let resolve; const promise = new Promise(r => { resolve = r; }); return { promise, resolve }; }
test("nationality waits for all four reused dependencies and ignores stale generations", async () => {
  const begin = app.indexOf("    const intro = keys =>");
  const line = app.slice(begin, app.indexOf("\n", begin));
  const start = app.indexOf("    const introCity =");
  const end = app.indexOf("    await Promise.all([srv, hw", start);
  for (const topic of [false, true]) {
    const srv = deferred(), hw = deferred(), kbd = deferred(), voices = deferred(), calls = [];
    const context = { NEED: topic ? new Set() : null, g: 1, gen: 1, srv: srv.promise, hw: hw.promise,
      tasks: new Map([["kbd", kbd.promise], ["voices", voices.promise]]),
      portrait: () => ({}), paintIntro: (p, keys) => calls.push([...keys]), schedulePortrait: () => calls.push(["fill"]), Promise };
    vm.createContext(context);
    vm.runInContext(line + "\n" + app.slice(start, end) + "\nglobalThis.ready = Promise.all([introCity, introNat]);", context);
    srv.resolve(); hw.resolve(); kbd.resolve();
    await Promise.resolve(); await Promise.resolve();
    assert.deepEqual(calls, topic ? [] : [["city"]]); // voices is not ready; never guess nationality early
    context.gen = 2;
    voices.resolve(); await context.ready;
    assert.deepEqual(calls, topic ? [] : [["city"]]); // a callback from the old run cannot replace the new skeleton
  }
  const srv = deferred(), hw = deferred(), kbd = deferred(), voices = deferred(), calls = [];
  const context = { NEED: null, g: 1, gen: 1, srv: srv.promise, hw: hw.promise,
    tasks: new Map([["kbd", kbd.promise], ["voices", voices.promise]]), portrait: () => ({}),
    paintIntro: (p, keys) => calls.push([...keys]), schedulePortrait: () => calls.push(["fill"]), Promise };
  vm.createContext(context);
  vm.runInContext(line + "\n" + app.slice(start, end) + "\nglobalThis.ready = Promise.all([introCity, introNat]);", context);
  srv.resolve(); hw.resolve(); kbd.resolve(); voices.resolve(); await context.ready;
  // once the first paragraph is in, the rest of the paragraph may fill as its readings land
  assert.deepEqual(calls, [["city"], ["nat"], ["fill"]]);
});
