import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const app = await readFile(new URL("../src/app.js", import.meta.url), "utf8");
const from = app.indexOf("  const RP_ENTRIES = ");
const to = app.indexOf("\n  }", app.indexOf("function syncReportEntries()")) + 4;
const block = app.slice(from, to);
assert.match(block, /RP_ENTRIES = \[\['#rpRead'|RP_ENTRIES = \[\["#rpRead"/);

function sync({ shell = true, end = true, embed = false, focus = null, R = null } = {}) {
  const shown = {};
  const context = {
    window: shell ? { msOpenReport() {} } : {},
    EMBED: embed, D: { focus }, R: R || (end ? { end: true } : {}),
    t: k => "pre_" + k,
    $: id => ({ setAttribute(k, v) { this[k] = v; }, hidden: true }),
  };
  context.__buttons = {};
  context.$ = id => (context.__buttons[id] ||= { setAttribute(k, v) { this[k] = v; }, hidden: true });
  vm.createContext(context);
  vm.runInContext(block + "\nsyncReportEntries();", context);
  return context.__buttons;
}

test("report entries wait for a finished result, the shell, and a non-embedded main page", () => {
  const cases = [
    ["finished run", {}, true],
    ["run not finished", { end: false }, false],
    ["no shell", { shell: false }, false],
    ["embedded", { embed: true }, false],
    ["topic page", { focus: { needs: [] } }, false],
  ];
  for (const [name, opts, visible] of cases) {
    const b = sync(opts);
    assert.equal(!b["#rpRead"].hidden, visible, name);
    assert.equal(!b["#rpCheck"].hidden, visible, name);
    assert.equal(b["#rpRead"]["data-ms-report"], "pre_rp_read_pre", name);
  }
  // a shared portrait never runs: there is no R, and nothing may show
  assert.equal(!sync({ R: undefined, end: false })["#rpRead"].hidden, false);
});
