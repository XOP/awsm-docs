import { paletteVars } from './palette.vars';
import { paletteElectric, paletteUltraviolet } from './palette.out';
import { detailsVars, detailsElectric, detailsUltraviolet } from './details';

import { default as content } from './content';
import { default as sizes } from './sizes';

export const tokens = {
  color: paletteVars,

  ...content,
  ...sizes,
  ...detailsVars,
};

export const tokensElectric = {
  color: paletteElectric,

  ...content,
  ...sizes,
  ...detailsElectric,
};

export const tokensUltraviolet = {
  color: paletteUltraviolet,

  ...content,
  ...sizes,
  ...detailsUltraviolet,
};
