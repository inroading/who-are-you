// The WebAssembly feature probes: each feature's own tiny module, from wasm-feature-detect 1.10.0
// (https://github.com/GoogleChromeLabs/wasm-feature-detect, Apache-2.0; the modules are its fixtures, unchanged).
// A browser compiles it or refuses: the answers, and the gaps between them, name the engine's real version whatever
// the user agent claims. JSPI has no module of its own: the API object says whether it is there.
export const WASM_FEATURES = [
  ["SIMD", [0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]],
  ["threads", [0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]],
  ["exceptions", [0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11]],
  ["tail calls", [0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,6,1,4,0,18,0,11]],
  ["reference types", [0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11]],
  ["bulk memory", [0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11]],
  ["multi-value", [0,97,115,109,1,0,0,0,1,6,1,96,0,2,127,127,3,2,1,0,10,8,1,6,0,65,0,65,0,11]],
  ["mutable globals", [0,97,115,109,1,0,0,0,2,8,1,1,97,1,98,3,127,1,6,6,1,127,1,65,0,11,7,5,1,1,97,3,1]],
  ["sign-extension", [0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11]],
  ["saturating float→int", [0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11]],
  ["extended const", [0,97,115,109,1,0,0,0,5,3,1,0,1,11,9,1,0,65,1,65,2,106,11,0]],
  ["relaxed SIMD", [0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11]],
  ["GC", [0,97,115,109,1,0,0,0,1,5,1,95,1,120,0]],
  ["memory64", [0,97,115,109,1,0,0,0,5,3,1,4,1]],
  ["multi-memory", [0,97,115,109,1,0,0,0,5,5,2,0,0,0,0]],
  ["wide arithmetic", [0,97,115,109,1,0,0,0,1,10,1,96,4,126,126,126,126,2,126,126,3,2,1,0,10,14,1,12,0,32,0,32,1,32,2,32,3,252,19,11]],
  ["JSPI", null],
];

// [[feature, supported], …] in the list's order, or null where the browser has no WebAssembly at all
export function wasmProbe(W = globalThis.WebAssembly) {
  if (!W || !W.validate) return null;
  return WASM_FEATURES.map(([name, bytes]) => {
    try { return [name, bytes ? W.validate(new Uint8Array(bytes)) : "Suspending" in W]; }
    catch (e) { return [name, false]; }
  });
}
