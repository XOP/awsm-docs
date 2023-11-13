import { paletteVars as palette } from './palette.vars';

export default {
  shadow: {
    color: palette.shadow,
    colorRgb: palette.shadowRgb,
    small: `0px 1px 1px rgba(${palette.shadowRgb}, 0.2), 0px 1px 2px -0.5px rgba(${palette.shadowRgb}, 0.45), 0px 1px 4px -3px rgba(${palette.shadowRgb}, 0.35)`,
    medium: `0px 1px 1px -0.5px rgba(${palette.shadowRgb}, 0.1), 0px 1px 2px -1px rgba(${palette.shadowRgb}, 0.25), 0px 2px 3px -1.5px rgba(${palette.shadowRgb}, 0.3), 0px 5px 6px -2px rgba(${palette.shadowRgb}, 0.4)`,
    large: `0px 0.5px 0.5px rgba(${palette.shadowRgb}, 0.2), 0px 2px 2px -0.5px rgba(${palette.shadowRgb}, 0.25), 0px 5px 6px -1px rgba(${palette.shadowRgb}, 0.25), 0px 8px 9px -1px rgba(${palette.shadowRgb}, 0.3), 0px 12px 14px -2px rgba(${palette.shadowRgb}, 0.3), 0px 16px 20px -3px rgba(${palette.shadowRgb}, 0.25)`,
  },

  duration: {
    instant: '123ms',
    short: '173ms',
    regular: '245ms',
    long: '346ms',
    extra: '490ms',
  },

  focus: {
    color: palette.focusRing,
    outline: `2px solid ${palette.focusRing}`,
    outlineOffset: '1px',
  },

  selection: {
    color: palette.secondary.contrast,
    contrast: palette.secondary.main,
  },
}
