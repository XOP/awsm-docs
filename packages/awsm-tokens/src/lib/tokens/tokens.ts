import { paletteVars } from './palette.vars';
import { paletteBase } from './palette.out';
import { detailsVars, detailsBase } from './details';

import { default as content } from './content';
import { default as sizes } from './sizes';

export const tokens = {
  color: paletteVars,

  ...content,
  ...sizes,
  ...detailsVars,
};

export const tokensBase = {
  color: paletteBase,

  ...content,
  ...sizes,
  ...detailsBase,
};
