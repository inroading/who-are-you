import { test } from "node:test";
import assert from "node:assert/strict";
import { WASM_FEATURES, wasmProbe } from "../src/wasm.mjs";

test("WebAssembly probes: each feature has its own module, and the answers are a list", () => {
  assert.equal(new Set(WASM_FEATURES.map(([name]) => name)).size, WASM_FEATURES.length, "feature names are unique");
  assert.ok(WASM_FEATURES.every(([, b]) => b === null || (Array.isArray(b) && b[0] === 0 && b[1] === 97)), "each probe is a wasm module");
  const r = wasmProbe();
  assert.equal(r.length, WASM_FEATURES.length);
  assert.ok(r.every(([name, ok]) => typeof name === "string" && typeof ok === "boolean"));
  // Node's V8 has SIMD, and every current engine does: an all-refused list would mean the fixtures went wrong
  assert.equal(r.find(([name]) => name === "SIMD")[1], true);
  assert.equal(wasmProbe(null), null);
});
