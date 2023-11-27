import { parseToRgb, lighten, darken } from 'polished';

import colors from './colors';

export const paletteElectric = {
  gamma: {
    '50': colors.gamma[50],
    '100': colors.gamma[100],
    '150': colors.gamma[150],
    '200': colors.gamma[200],
    '250': colors.gamma[250],
    '300': colors.gamma[300],
    '350': colors.gamma[350],
    '400': colors.gamma[400],
    '450': colors.gamma[450],
    '500': colors.gamma[500],
    '550': colors.gamma[550],
    '600': colors.gamma[600],
    '650': colors.gamma[650],
    '700': colors.gamma[700],
    '750': colors.gamma[750],
    '800': colors.gamma[800],
    '850': colors.gamma[850],
    '900': colors.gamma[900],
    '950': colors.gamma[950],
  },

  primary: {
    main: colors.blue[700],
    mainRgb: rgbString(colors.blue[700]),
    tint: colors.blue[500],
    shade: colors.blue[950],
    tone: colors.blue[900],
    contrast: colors.white,
    gamma: {
      '100': lighten(0.45, colors.blue[700]),
      '200': lighten(0.35, colors.blue[700]),
      '300': lighten(0.25, colors.blue[700]),
      '400': lighten(0.15, colors.blue[700]),
      '500': lighten(0.05, colors.blue[700]),
      '600': darken(0.1, colors.blue[700]),
      '700': darken(0.2, colors.blue[700]),
      '800': darken(0.3, colors.blue[700]),
      '900': darken(0.4, colors.blue[700]),
    },
  },

  secondary: {
    main: colors.lime[500],
    mainRgb: rgbString(colors.lime[500]),
    tint: colors.lime[400],
    shade: colors.lime[800],
    tone: colors.lime[600],
    contrast: colors.black,
    gamma: {
      '100': lighten(0.45, colors.lime[500]),
      '200': lighten(0.35, colors.lime[500]),
      '300': lighten(0.25, colors.lime[500]),
      '400': lighten(0.15, colors.lime[500]),
      '500': lighten(0.05, colors.lime[500]),
      '600': darken(0.1, colors.lime[500]),
      '700': darken(0.2, colors.lime[500]),
      '800': darken(0.3, colors.lime[500]),
      '900': darken(0.4, colors.lime[500]),
    },
  },

  safe: {
    main: colors.green[600],
    mainRgb: rgbString(colors.green[600]),
    tint: colors.green[500],
    shade: colors.green[900],
    tone: colors.green[800],
    contrast: colors.white,
  },

  alert: {
    main: colors.red[700],
    mainRgb: rgbString(colors.red[700]),
    tint: colors.red[600],
    shade: colors.red[900],
    tone: colors.red[800],
    contrast: colors.white,
  },

  info: {
    main: colors.sky[700],
    mainRgb: rgbString(colors.sky[700]),
    tint: colors.sky[500],
    shade: colors.sky[900],
    tone: colors.sky[800],
    contrast: colors.white,
  },

  warning: {
    main: colors.amber[600],
    mainRgb: rgbString(colors.amber[600]),
    tint: colors.amber[400],
    shade: colors.amber[900],
    tone: colors.amber[800],
    contrast: colors.white,
  },

  text: {
    strong: colors.gamma[950],
    regular: colors.gamma[850],
    subtle: colors.gamma[750],
    muted: colors.gamma[650],
  },

  background: {
    regular: colors.white,
    subtle: colors.gamma[50],
    muted: colors.gamma[150]
  },

  shadow: colors.black,
  shadowRgb: rgbString(colors.black),

  focusRing: colors.blue[800],
};

export const paletteUltraviolet = {
  gamma: {
    '50': colors.gamma[950],
    '100': colors.gamma[900],
    '150': colors.gamma[850],
    '200': colors.gamma[800],
    '250': colors.gamma[750],
    '300': colors.gamma[700],
    '350': colors.gamma[650],
    '400': colors.gamma[600],
    '450': colors.gamma[550],
    '500': colors.gamma[500],
    '550': colors.gamma[450],
    '600': colors.gamma[400],
    '650': colors.gamma[350],
    '700': colors.gamma[300],
    '750': colors.gamma[250],
    '800': colors.gamma[200],
    '850': colors.gamma[150],
    '900': colors.gamma[100],
    '950': colors.gamma[50],
  },

  primary: {
    main: colors.fuchsia[600],
    mainRgb: rgbString(colors.blue[600]),
    tint: colors.fuchsia[400],
    shade: colors.fuchsia[800],
    tone: colors.fuchsia[700],
    contrast: colors.white,
    gamma: {
      '100': darken(0.4, colors.fuchsia[600]),
      '200': darken(0.3, colors.fuchsia[600]),
      '300': darken(0.2, colors.fuchsia[600]),
      '400': darken(0.1, colors.fuchsia[600]),
      '500': lighten(0.05, colors.fuchsia[600]),
      '600': lighten(0.15, colors.fuchsia[600]),
      '700': lighten(0.25, colors.fuchsia[600]),
      '800': lighten(0.35, colors.fuchsia[600]),
      '900': lighten(0.45, colors.fuchsia[600]),
    },
  },

  secondary: {
    main: colors.cyan[400],
    mainRgb: rgbString(colors.cyan[400]),
    tint: colors.cyan[300],
    shade: colors.cyan[600],
    tone: colors.cyan[800],
    contrast: colors.black,
    gamma: {
      '100': darken(0.4, colors.cyan[400]),
      '200': darken(0.3, colors.cyan[400]),
      '300': darken(0.2, colors.cyan[400]),
      '400': darken(0.1, colors.cyan[400]),
      '500': lighten(0.05, colors.cyan[400]),
      '600': lighten(0.15, colors.cyan[400]),
      '700': lighten(0.25, colors.cyan[400]),
      '800': lighten(0.35, colors.cyan[400]),
      '900': lighten(0.45, colors.cyan[400]),
    },
  },

  safe: {
    main: colors.green[600],
    mainRgb: rgbString(colors.green[600]),
    tint: colors.green[500],
    shade: colors.green[900],
    tone: colors.green[800],
    contrast: colors.white,
  },

  alert: {
    main: colors.red[700],
    mainRgb: rgbString(colors.red[700]),
    tint: colors.red[600],
    shade: colors.red[900],
    tone: colors.red[800],
    contrast: colors.white,
  },

  info: {
    main: colors.sky[700],
    mainRgb: rgbString(colors.sky[700]),
    tint: colors.sky[500],
    shade: colors.sky[900],
    tone: colors.sky[800],
    contrast: colors.white,
  },

  warning: {
    main: colors.amber[600],
    mainRgb: rgbString(colors.amber[600]),
    tint: colors.amber[400],
    shade: colors.amber[900],
    tone: colors.amber[800],
    contrast: colors.white,
  },

  text: {
    strong: colors.gamma[50],
    regular: colors.gamma[200],
    subtle: colors.gamma[300],
    muted: colors.gamma[400],
  },

  background: {
    regular: colors.gamma[900],
    subtle: colors.gamma[800],
    muted: colors.gamma[700]
  },

  shadow: colors.black,
  shadowRgb: rgbString(colors.black),

  focusRing: colors.blue[800],
};

function rgbString(color: string) {
  const rgb = parseToRgb(color);

  return `${rgb.red}, ${rgb.green}, ${rgb.blue}`;
}
