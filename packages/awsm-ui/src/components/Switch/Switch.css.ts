import { style } from '@vanilla-extract/css';

export const rootCls = style({
  display: 'flex',
  gap: '1rem'
});

export const switchCls = style({
  width: '2rem',
  height: '1rem',
  background: 'lime',
  borderRadius: '9999px',
});

export const labelCls = style({
  color: '#1a1a1a',
});

export const thumbCls = style({
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  willChange: 'transform',
});
