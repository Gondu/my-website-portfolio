export const navbarGlitchWritingOptions = {
  interval: [0, 60],
  delay: 0,
  steps: 25,
  ghostChance: 0,
  maxGhosts: 0,
  changeChance: 0.8,
  oneAtATime: 0,
  glyphs:
    "一二三四五六七八九十百千上下左右中大小月日年早木林山川土空田天生花草虫犬人名女男子目耳口手足見音力気円入出立休先夕本文字学校村町森正水火玉王石竹糸貝車金雨赤青白数多少万半形太細広長点丸交光角計直線矢弱強高同親母父姉兄弟妹自友体毛頭顔首心時曜朝昼夜分週春夏秋冬今新古間方北南東西遠近前後内外場地国園谷野原里市京風雪雲池海岩星室戸家寺通門道話言答声聞語読書記紙画絵図工教晴思考知才理算作元食肉馬牛魚鳥羽鳴麦米茶色黄黒来行帰歩走止活店買売午汽弓回会組船明社切電毎合当台楽公引科歌刀番用何",
  fillSpace: false,
  glyphsFromText: false,
  mode: "clear",
};

export const glitch_loading_navbar_data = {
  playMode: "always",
  createContainers: true,
  hideOverflow: true,
  timing: {
    duration: 4000,
    iterations: 2,
  },
  glitchTimeSpan: {
    start: -0.46,
    end: 0.41,
  },
  shake: {
    velocity: 8,
    amplitudeX: 0.15,
    amplitudeY: 0.18,
  },
  slice: {
    count: 10,
    velocity: 8,
    minHeight: 0.09,
    maxHeight: 0.19,
    hueRotate: true,
  },
  pulse: {
    scale: 3,
  },
};

export const glitch_loading_logoAndResume_data = {
  playMode: "always",
  createContainers: true,
  hideOverflow: false,
  timing: {
    duration: 4000,
    iterations: 2,
  },
  glitchTimeSpan: {
    start: -0.2,
    end: 0.7,
  },
  shake: {
    velocity: 25,
    amplitudeX: 0.09,
    amplitudeY: 0.09,
  },
  slice: {
    count: 5,
    velocity: 5,
    minHeight: 0.02,
    maxHeight: 0.1,
    hueRotate: true,
  },
  pulse: {
    scale: 1,
  },
};

export const glitch_desktop_navItems = {
  playMode: "hover",
  createContainers: true,
  hideOverflow: false,
  timing: {
    duration: 4000,
    iterations: Infinity,
  },
  glitchTimeSpan: {
    start: -0.4,
    end: 1,
  },
  shake: {
    velocity: 22,
    amplitudeX: 0.07,
    amplitudeY: 0.07,
  },
  slice: {
    count: 5,
    velocity: 5,
    minHeight: 0.02,
    maxHeight: 0.1,
    hueRotate: true,
  },
  pulse: {
    scale: 1,
  },
};

export const glitch_mobile_navItems = {
  playMode: "always",
  createContainers: true,
  hideOverflow: false,
  timing: {
    duration: 4500,
    easing: "ease-in-out",
  },
  glitchTimeSpan: {
    start: 0.9,
    end: 1,
  },
  shake: {
    velocity: 15,
    amplitudeX: 0.04,
    amplitudeY: 0.04,
  },
  slice: {
    count: 6,
    velocity: 15,
    minHeight: 0.02,
    maxHeight: 0.15,
    hueRotate: true,
  },
  pulse: false,
};
