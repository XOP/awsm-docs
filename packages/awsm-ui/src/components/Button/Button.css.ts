import { recipe } from '@vanilla-extract/recipes';

import { StyleRule } from '@vanilla-extract/css';

import { theme } from '../../theme';
import { calc } from '../../helpers';

import { ButtonColors, ButtonSizes, ButtonVariants } from './Button';

const colors: { [key in ButtonColors]: StyleRule } = {
  primary: {},
  secondary: {},
};

const variants: { [key in ButtonVariants]: StyleRule } = {
  solid: {},
  ghost: {},
  text: {},
};

const sizes: { [key in ButtonSizes]: StyleRule } = {
  small: {
    paddingBlock: theme.space[1],
    paddingInline: theme.space[1],
    height: calc(
      calc.x(theme.fontSize.s, theme.lineHeight.tight),
      calc.x(theme.space[1], 2),
      calc.x(theme.space.px, 2)
    ),
    fontSize: theme.fontSize.s,
    lineHeight: theme.lineHeight.tight,
  },

  regular: {
    paddingBlock: theme.space[2],
    paddingInline: theme.space[2],
    height: calc(
      calc.x(theme.fontSize.s, theme.lineHeight.tight),
      calc.x(theme.space[2], 2),
      calc.x(theme.space.px, 2)
    ),
    fontSize: theme.fontSize.s,
    lineHeight: theme.lineHeight.tight,
  },

  large: {
    paddingBlock: theme.space[2],
    paddingInline: theme.space[3],
    height: calc(
      calc.x(theme.fontSize.n, theme.lineHeight.tight),
      calc.x(theme.space[2], 2),
      calc.x(theme.space.px, 2)
    ),
    fontSize: theme.fontSize.s,
    lineHeight: theme.lineHeight.tight,
  },
};

export const styles = recipe({
  base: [
    {
      boxSizing: 'border-box',
      border: `${theme.space.px} solid transparent`,
      borderRadius: theme.radius.s,
      textTransform: 'uppercase',
      cursor: 'pointer',
      transition: 'background-color',
      transitionDuration: theme.duration.instant,
      transitionTimingFunction: 'ease-in-out',

      ':disabled': {
        filter: 'grayscale(1)',
        opacity: 0.5,
        cursor: 'default',
      },

      ':focus-visible': {
        outline: `${theme.space['0.5']} solid`,
        outlineColor: theme.color.focusRing,
        outlineOffset: theme.space['0.5'],
      },
    },
  ],

  variants: {
    color: colors,
    variant: variants,
    size: sizes,
  },

  compoundVariants: [
    {
      variants: {
        color: 'primary',
        variant: 'solid',
      },
      style: {
        backgroundColor: theme.color.primary.main,
        color: theme.color.primary.contrast,
        borderColor: theme.color.primary.main,
        ':hover': {
          backgroundColor: theme.color.primary.gamma[500],
        },
        ':active': {
          backgroundColor: theme.color.primary.gamma[400],
        },
        ':disabled': {
          backgroundColor: theme.color.primary.main,
          color: theme.color.primary.contrast,
          borderColor: theme.color.primary.main,
        },
      },
    },
    {
      variants: {
        color: 'secondary',
        variant: 'solid',
      },
      style: {
        backgroundColor: theme.color.secondary.main,
        color: theme.color.secondary.contrast,
        borderColor: theme.color.secondary.main,
        ':hover': {
          backgroundColor: theme.color.secondary.gamma[500],
        },
        ':active': {
          backgroundColor: theme.color.secondary.gamma[300],
        },
        ':disabled': {
          backgroundColor: theme.color.secondary.main,
          color: theme.color.secondary.contrast,
          borderColor: theme.color.secondary.main,
        },
      },
    },

    {
      variants: {
        color: 'primary',
        variant: 'ghost',
      },
      style: {
        backgroundColor: 'transparent',
        color: theme.color.primary.main,
        borderColor: theme.color.primary.main,
        ':hover': {
          backgroundColor: theme.color.primary.gamma[200],
        },
        ':active': {
          backgroundColor: theme.color.primary.gamma[300],
        },
        ':disabled': {
          backgroundColor: 'transparent',
          color: theme.color.text.muted,
          borderColor: theme.color.primary.main,
        },
      },
    },
    {
      variants: {
        color: 'secondary',
        variant: 'ghost',
      },
      style: {
        backgroundColor: 'transparent',
        color: theme.color.secondary.shade,
        borderColor: theme.color.secondary.tone,
        ':hover': {
          backgroundColor: theme.color.secondary.gamma[300],
        },
        ':active': {
          backgroundColor: theme.color.secondary.gamma[400],
        },
        ':disabled': {
          backgroundColor: 'transparent',
          color: theme.color.text.muted,
          borderColor: theme.color.secondary.tone,
        },
      },
    },

    {
      variants: {
        color: 'primary',
        variant: 'text',
      },
      style: {
        backgroundColor: 'transparent',
        color: theme.color.primary.main,
        ':hover': {
          backgroundColor: theme.color.primary.gamma[200],
        },
        ':active': {
          backgroundColor: theme.color.primary.gamma[300],
        },
        ':disabled': {
          backgroundColor: 'transparent',
          color: theme.color.text.muted,
        },
      },
    },
    {
      variants: {
        color: 'secondary',
        variant: 'text',
      },
      style: {
        backgroundColor: 'transparent',
        color: theme.color.secondary.shade,
        ':hover': {
          backgroundColor: theme.color.secondary.gamma[300],
        },
        ':active': {
          backgroundColor: theme.color.secondary.gamma[400],
        },
        ':disabled': {
          backgroundColor: 'transparent',
          color: theme.color.text.muted,
        },
      },
    },
  ],
});
