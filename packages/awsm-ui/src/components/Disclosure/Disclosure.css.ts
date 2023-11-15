import { recipe } from '@vanilla-extract/recipes';
import { style, StyleRule } from '@vanilla-extract/css';

import { theme } from '../../theme';

import { DisclosureColors, DisclosureVariants } from './Disclosure';

const colors: { [key in DisclosureColors]: StyleRule } = {
  primary: {},
  secondary: {},
};

const variants: { [key in DisclosureVariants]: StyleRule } = {
  regular: {},
  strong: {},
};

export const styles = recipe({
  base: {
    fontSize: theme.fontSize.n,
    lineHeight: theme.lineHeight.normal,
    fontFamily: theme.fontFamily,
  },

  variants: {
    color: colors,
    variant: variants,
  },
});

export const toggleCls = style({
  appearance: 'none',
  display: 'block',
  width: '100%',
  paddingBlock: theme.space[2],
  paddingInline: theme.space[4],
  border: 'none',
  borderRadius: theme.radius.n,
  textAlign: 'start',
  fontSize: theme.fontSize.n,
  lineHeight: theme.lineHeight.normal,
  fontFamily: theme.fontFamily,
  cursor: 'pointer',

  selectors: {
    [`${styles.classNames.variants.variant.strong} &`]: {
      fontWeight: 'bold',
    },

    [`${styles.classNames.variants.color.primary}.${styles.classNames.variants.variant.regular} &`]:
      {
        color: theme.color.primary.main,
        backgroundColor: theme.color.primary.gamma[100],
      },
    [`${styles.classNames.variants.color.primary}.${styles.classNames.variants.variant.regular} &:hover`]:
      {
        backgroundColor: theme.color.primary.gamma[200],
      },

    [`${styles.classNames.variants.color.primary}.${styles.classNames.variants.variant.strong} &`]:
      {
        color: theme.color.primary.shade,
        backgroundColor: theme.color.primary.gamma[200],
      },
    [`${styles.classNames.variants.color.primary}.${styles.classNames.variants.variant.strong} &:hover`]:
      {
        backgroundColor: theme.color.primary.gamma[300],
      },

    [`${styles.classNames.variants.color.secondary}.${styles.classNames.variants.variant.regular} &`]:
      {
        color: theme.color.secondary.shade,
        backgroundColor: theme.color.secondary.gamma[200],
      },
    [`${styles.classNames.variants.color.secondary}.${styles.classNames.variants.variant.regular} &:hover`]:
      {
        backgroundColor: theme.color.secondary.gamma[300],
      },

    [`${styles.classNames.variants.color.secondary}.${styles.classNames.variants.variant.strong} &`]:
      {
        color: theme.color.secondary.shade,
        backgroundColor: theme.color.secondary.gamma[300],
      },
    [`${styles.classNames.variants.color.secondary}.${styles.classNames.variants.variant.strong} &:hover`]:
      {
        backgroundColor: theme.color.secondary.gamma[400],
      },
  },
});

export const contentCls = style({
  paddingBlock: theme.space[2],
  paddingInline: theme.space[4],
  color: theme.color.text.regular,
});
