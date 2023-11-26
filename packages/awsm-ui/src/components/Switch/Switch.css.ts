import { style, createVar, StyleRule } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { theme } from '../../theme';
import { calc } from '../../helpers';

import { SwitchColors, SwitchSizes } from './Switch';

export const $thumbSize = createVar();
export const $trackSize = createVar();

export const $thumbOffset = theme.space['0.5'];
export const $borderSize = theme.space.px;

const colors: { [key in SwitchColors]: StyleRule } = {
  primary: {
    backgroundColor: theme.color.primary.gamma[200],

    selectors: {
      ['&[data-state="checked"]']: {
        borderColor: theme.color.primary.main,
      },
    },
  },
  secondary: {
    backgroundColor: theme.color.secondary.gamma[100],

    selectors: {
      ['&[data-state="checked"]']: {
        borderColor: theme.color.secondary.shade,
      },
    },
  },
};

const sizes: { [key in SwitchSizes]: StyleRule } = {
  regular: {
    vars: {
      [$thumbSize]: theme.space[5],
      [$trackSize]: theme.space[10],
    },
  },
  small: {
    vars: {
      [$thumbSize]: theme.space[3],
      [$trackSize]: theme.space[6],
    },
  },
};

export const wrapperStyles = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.space[2],
    fontFamily: theme.fontFamily,
  },

  variants: {
    size: sizes,
  },
});

export const styles = recipe({
  base: {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'block',
    width: calc($trackSize, calc.x($thumbOffset, 2), calc.x($borderSize, 2)),
    height: calc($thumbSize, calc.x($thumbOffset, 2), calc.x($borderSize, 2)),
    borderRadius: theme.radius.pill,
    border: `${$borderSize} solid ${theme.color.gamma[400]}`,

    ':focus-visible': {
      outline: `${theme.space['0.5']} solid`,
      outlineColor: theme.color.focusRing,
      outlineOffset: theme.space['0.5'],
    },

    selectors: {
      ['&[data-disabled]']: {
        filter: 'grayscale(1)',
        opacity: 0.5,
      },
    },
  },

  variants: {
    color: colors,
    size: sizes,
  },
});

export const thumbCls = style({
  position: 'absolute',
  top: $thumbOffset,
  left: $thumbOffset,
  width: $thumbSize,
  height: $thumbSize,
  backgroundColor: theme.color.gamma[450],
  borderRadius: theme.radius.round,
  boxShadow: theme.shadow.small,
  transitionProperty: 'transform',
  transitionDuration: theme.duration.short,
  willChange: 'transform',

  selectors: {
    [`${styles.classNames.variants.color.primary} &[data-state="checked"]`]: {
      backgroundColor: theme.color.primary.main,
    },

    [`${styles.classNames.variants.color.secondary} &[data-state="checked"]`]: {
      backgroundColor: theme.color.secondary.shade,
    },

    ['&[data-state="checked"]']: {
      transform: `translateX(${calc($trackSize, calc.minus($thumbSize))})`,
    },
  },
});

export const labelCls = style({
  color: theme.color.text.regular,
  userSelect: 'none',

  selectors: {
    [`${wrapperStyles.classNames.variants.size.regular} &`]: {
      fontSize: theme.fontSize.n,
      lineHeight: theme.lineHeight.normal,
    },

    [`${wrapperStyles.classNames.variants.size.small} &`]: {
      fontSize: theme.fontSize.s,
      lineHeight: theme.lineHeight.normal,
    },
  },
});
