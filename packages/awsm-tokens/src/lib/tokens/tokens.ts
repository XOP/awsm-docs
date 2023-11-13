import { paletteVars as palette } from './palette.vars';
import { default as content } from './content';
import { default as sizes } from './sizes';
import { default as details } from './details';

export const tokens = {
  color: palette,

  ...content,
  ...sizes,
  ...details,
};
