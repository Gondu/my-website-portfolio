export const glitch_loading_home_button_data = {
  playMode: "always",
  createContainers: true,
  hideOverflow: true,
  timing: {
    duration: 1300,
    iterations: 1,
  },
  glitchTimeSpan: {
    start: 0,
    end: 1,
  },
  shake: {
    velocity: 35,
    amplitudeX: 0.01,
    amplitudeY: 0.05,
  },
  slice: {
    count: 5,
    velocity: 5,
    minHeight: 0.04,
    maxHeight: 0.13,
    hueRotate: true,
  },
  pulse: {
    scale: 1,
  },
};

export const glitch_loading_home_title_data = {
  playMode: "always",
  createContainers: true,
  hideOverflow: true,
  timing: {
    duration: 25000,
    iterations: Infinity,
  },
  glitchTimeSpan: {
    start: 0.2,
    end: 0.3,
  },
  shake: {
    velocity: 90,
    amplitudeX: 0.009,
    amplitudeY: 0.03,
  },
  slice: {
    count: 2,
    velocity: 10,
    minHeight: 0.04,
    maxHeight: 0.12,
    hueRotate: true,
  },
};

export const glitch_loading_home_title_hover_data = {
  playMode: "hover",
  createContainers: true,
  hideOverflow: true,
  timing: {
    duration: 2000,
    iterations: Infinity,
  },
  glitchTimeSpan: {
    start: 0,
    end: 1,
  },
  shake: {
    velocity: 10,
    amplitudeX: 0.002,
    amplitudeY: 0.012,
  },
  slice: {
    count: 2,
    velocity: 1,
    minHeight: 0.002,
    maxHeight: 0.045,
    hueRotate: true,
  },
};

// Possible interesting symbols to use
// 一二三四五六七八九十百千上下左右中大小月日年早木林山川土空田天生花草虫犬人名女男子目耳口手足見音力気円入出立休先夕本文字学校村町森正水火玉王石竹糸貝車金雨赤青白数多少万半形太細広長点丸交光角計直線矢弱強高同親母父姉兄弟妹自友体毛頭顔首心時曜朝昼夜分週春夏秋冬今新古間方北南東西遠近前後内外場地国園谷野原里市京風雪雲池海岩星室戸家寺通門道話言答声聞語読書記紙画絵図工教晴思考知才理算作元食肉馬牛魚鳥羽鳴麦米茶色黄黒来行帰歩走止活店買売午汽弓回会組船明社切電毎合当台楽公引科歌刀番用何
// #!2134567890<>-_—=+*^?#_番用何
// #!2134567890<>-_—=+*^?#_番用何ΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσςΤτΥυΦφΧχΨψΩω教晴才食肉馬牛
// !<>-_/[]{}—=+*^?#________
export const home_text_glitch_writer_data = {
  maxGhosts: 0.3,
  ghostChance: 0.1,
  changeChance: 0.75,
  steps: 3,
  interval: 5,
  delay: [5, 10],
  oneAtATime: 1,
  glyphs: "!<>-_/[]{}—=+*^?#________大左",
  fillSpace: true,
  glyphsFromText: true,
  mode: "normal",
};

export const home_name_glitch_writer_data = {
  maxGhosts: 0,
  ghostChance: 0,
  changeChance: 0.8,
  steps: 3,
  interval: 10,
  delay: [5, 15],
  oneAtATime: 1,
  glyphsFromText: true,
  glyphs: "!<>-_/[]{}—=+*^?#________大左",
  mode: "normal",
};

export const home_info_glitch_writer_data = {
  interval: [0, 25],
  delay: [40, 60],
  steps: 13,
  ghostChance: 0,
  maxGhosts: 0,
  changeChance: 0.3,
  oneAtATime: 0,
  glyphs: "!<>-_/[]{}—=+*^?#________大左",
  fillSpace: false,
  glyphsFromText: false,
  mode: "normal",
};
