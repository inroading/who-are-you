// How wide each blank of the portrait is once filled, per language, in em on one line: measured on a typical run
// (a probe page run, once per language), so a blank can wait as filler of about that length. Off by a word or
// two for another visitor, which is fine: the paragraph still keeps roughly its shape.
export const BLANK_W = {
  "en":{"nat":4,"city":12,"lang":8,"tz":10,"clock":4,"device":12,"browser":10,"screen":9,"gpu":9,"rig":39,"isp":7,"nettype":9,"dns":4,"read":47,"theme":5,"adblock":7,"track":40,"job":10,"age":11,"tier":22,"fresh":17,"when":19,"power":5,"prefs":20,"stand":35},
  "zh-CN":{"nat":4,"city":9,"lang":6,"tz":6,"clock":5,"device":8,"browser":10,"screen":9,"gpu":4,"rig":22,"isp":7,"nettype":8,"dns":4,"read":31,"theme":4,"adblock":8,"track":25,"job":5,"age":12,"tier":21,"fresh":10,"when":11,"power":4,"prefs":9,"stand":19},
  "zh-TW":{"nat":4,"city":9,"lang":6,"tz":6,"clock":5,"device":8,"browser":10,"screen":9,"gpu":4,"rig":22,"isp":7,"nettype":7,"dns":4,"read":31,"theme":4,"adblock":10,"track":25,"job":5,"age":12,"tier":22,"fresh":10,"when":11,"power":4,"prefs":9,"stand":19},
  "ja":{"nat":4,"city":9,"lang":6,"tz":5,"clock":4,"device":8,"browser":10,"screen":9,"gpu":8,"rig":43,"isp":7,"nettype":13,"dns":4,"read":37,"theme":6,"adblock":12,"track":50,"job":4,"age":11,"tier":23,"fresh":19,"when":14,"power":10,"prefs":5,"stand":26},
  "ko":{"nat":4,"city":9,"lang":6,"tz":5,"clock":5,"device":7,"browser":10,"screen":9,"gpu":8,"rig":30,"isp":7,"nettype":17,"dns":4,"read":44,"theme":5,"adblock":7,"track":33,"job":8,"age":18,"tier":22,"fresh":21,"when":10,"power":9,"prefs":8,"stand":28},
  "es":{"nat":4,"city":12,"lang":6,"tz":11,"clock":4,"device":11,"browser":10,"screen":9,"gpu":12,"rig":46,"isp":7,"nettype":12,"dns":4,"read":46,"theme":7,"adblock":9,"track":41,"job":9,"age":17,"tier":22,"fresh":20,"when":18,"power":12,"prefs":22,"stand":30},
  "fr":{"nat":4,"city":12,"lang":7,"tz":13,"clock":3,"device":11,"browser":10,"screen":9,"gpu":7,"rig":45,"isp":7,"nettype":10,"dns":4,"read":56,"theme":6,"adblock":13,"track":54,"job":9,"age":20,"tier":26,"fresh":23,"when":15,"power":6,"prefs":20,"stand":33},
  "de":{"nat":4,"city":12,"lang":9,"tz":11,"clock":6,"device":12,"browser":10,"screen":9,"gpu":10,"rig":49,"isp":7,"nettype":13,"dns":4,"read":56,"theme":9,"adblock":11,"track":42,"job":9,"age":19,"tier":24,"fresh":22,"when":18,"power":7,"prefs":19,"stand":32},
  "pt":{"nat":4,"city":12,"lang":7,"tz":12,"clock":4,"device":11,"browser":10,"screen":9,"gpu":13,"rig":50,"isp":7,"nettype":11,"dns":4,"read":47,"theme":6,"adblock":9,"track":49,"job":9,"age":18,"tier":24,"fresh":25,"when":19,"power":8,"prefs":22,"stand":31},
  "ru":{"nat":5,"city":11,"lang":9,"tz":13,"clock":6,"device":9,"browser":10,"screen":9,"gpu":13,"rig":50,"isp":7,"nettype":20,"dns":5,"read":62,"theme":4,"adblock":12,"track":39,"job":10,"age":18,"tier":25,"fresh":19,"when":19,"power":4,"prefs":20,"stand":37}
};
