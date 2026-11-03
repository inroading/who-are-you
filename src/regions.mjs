// Taiwan is named "中国台湾 / Taiwan, China" in every language and shown with China's flag (1ms.dog's rule,
// 1ms-shell docs/tool-contract.md §5), not with the system's region name or its own flag. Used by the page and the
// Worker (a shared portrait's link preview), so both say it the same way.
export const TW = { "zh-CN": "中国台湾", "zh-TW": "中國台灣", en: "Taiwan, China", ja: "中国台湾", ko: "중국 대만", es: "Taiwán, China", fr: "Taïwan, Chine", de: "Taiwan, China", pt: "Taiwan, China", ru: "Тайвань, Китай" };
// a region's name in a language: Taiwan's from the table, any other from the system
export const regionName = (cc, lang) => {
  if (cc === "TW") return TW[lang] || TW.en;
  try { return new Intl.DisplayNames([lang], { type: "region" }).of(cc); } catch (e) { return cc; }
};
// the flag file for a region: Taiwan's is China's
export const flagCode = cc => cc === "TW" ? "cn" : String(cc).toLowerCase();
