// The first screen's share of the stylesheet, set inside the page so it paints without waiting for the file: the rules
// whose every class and id appears in the first screen's markup (the top bar, and the hero's portrait column), with
// the @media, @supports and @font-face blocks around or beside them, and the keyframes they name. The whole stylesheet
// still loads, without blocking, and takes over as it arrives; until then the rest of the page stays out of sight
// (--css, which only the file defines), so nothing unstyled shows and nothing in the first screen moves.
// Works on esbuild's minified output: no comments, strings only in a few known places.

// top-level blocks of a minified stylesheet: [prelude, body] for every rule or at-rule
function blocks(css) {
  const out = [];
  let i = 0;
  while (i < css.length) {
    const open = css.indexOf("{", i);
    if (open < 0) break;
    let depth = 1, j = open + 1, q = null;
    for (; j < css.length && depth; j++) {
      const c = css[j];
      if (q) { if (c === "\\") j++; else if (c === q) q = null; }
      else if (c === '"' || c === "'") q = c;
      else if (c === "{") depth++;
      else if (c === "}") depth--;
    }
    out.push([css.slice(i, open).trim(), css.slice(open + 1, j - 1)]);
    i = j;
  }
  return out;
}

// splits a selector list on its top-level commas (not those inside :is(), :not() and the like)
function selectors(list) {
  const out = [];
  let depth = 0, from = 0;
  for (let i = 0; i < list.length; i++) {
    const c = list[i];
    if (c === "(" || c === "[") depth++;
    else if (c === ")" || c === "]") depth--;
    else if (c === "," && !depth) { out.push(list.slice(from, i)); from = i + 1; }
  }
  out.push(list.slice(from));
  return out;
}

// the classes and ids a selector needs, leaving out what sits inside :not() (an absence the first screen can satisfy)
const needs = sel => {
  const s = sel.replace(/:not\((?:[^()]|\([^()]*\))*\)/g, "").replace(/\[[^\]]*\]/g, "");
  return [...s.matchAll(/([.#])(-?[_a-zA-Z][\w-]*)/g)].map(m => m[1] + m[2]);
};

// does the text have a character in a face's unicode-range ("U+0000-00FF, U+0131, U+2000-206F")?
const inRange = (range, cps) => range.split(",").some(r => {
  const m = r.trim().match(/^U\+([0-9A-F]+)(?:-([0-9A-F]+))?$/i);
  if (!m) return true;
  const a = parseInt(m[1], 16), b = m[2] ? parseInt(m[2], 16) : a;
  return cps.some(c => c >= a && c <= b);
});

// a selector for another language's page ([lang=fr], [lang^=zh]) has nothing to do on this one
const langOk = (sel, lang) => [...sel.matchAll(/\[lang(\^?)=["']?([\w-]+)["']?\]/g)].every(([, pre, v]) => pre ? lang.startsWith(v) : lang === v);

export function critical(css, markup, lang = "") {
  const have = new Set();
  // (an element hidden in the markup shows only once the script runs, and the script waits for the whole stylesheet)
  for (const m of markup.matchAll(/<[a-z][^>]*>/g)) {
    const tag = m[0];
    if (/\shidden[\s>]/.test(tag)) continue;
    const c = tag.match(/\sclass="([^"]*)"/), i = tag.match(/\sid="([^"]*)"/);
    if (c) for (const k of c[1].split(/\s+/)) if (k) have.add("." + k);
    if (i) have.add("#" + i[1]);
  }
  const text = markup.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]*>/g, "").replace(/&[a-z]+;|&#\d+;/g, " ");
  const cps = [...new Set([...text].map(ch => ch.codePointAt(0)))];
  const used = new Set();
  const walk = list => {
    let out = "";
    for (const [pre, body] of list) {
      // (a face only for the characters the first screen shows; the stylesheet brings the rest before the script runs)
      if (/^@font-face/.test(pre)) { const r = body.match(/unicode-range:([^;}]+)/); if (!r || inRange(r[1], cps)) out += pre + "{" + body + "}"; continue; }
      if (/^@keyframes/.test(pre)) continue;   // added below, when a kept rule names it
      if (/^@(media|supports|layer|container)/.test(pre)) { const inner = walk(blocks(body)); if (inner) out += pre + "{" + inner + "}"; continue; }
      if (pre.startsWith("@")) { out += pre + (body ? "{" + body + "}" : ";"); continue; }
      if (/--css:/.test(body)) continue;   // (the file's own sign that it has come)
      const keep = selectors(pre).filter(s => needs(s).every(n => have.has(n)) && langOk(s, lang));
      if (!keep.length) continue;
      out += keep.join(",") + "{" + body + "}";
      for (const m of body.matchAll(/animation(?:-name)?:([^;}]+)/g)) for (const w of m[1].split(/[\s,]+/)) used.add(w);
    }
    return out;
  };
  let out = walk(blocks(css));
  for (const [pre, body] of blocks(css)) { const m = pre.match(/^@keyframes\s+([\w-]+)/); if (m && used.has(m[1])) out += pre + "{" + body + "}"; }
  return out;
}
