import * as React from 'react';

import clsx from 'clsx';

import {
  Switch as BaseSwitch,
  SwitchThumb,
  SwitchProps as BaseSwitchProps,
} from '@radix-ui/react-switch';

import { wrapperCls, switchCls, labelCls, thumbCls } from './Switch.css';

export type SwitchColors = 'primary' | 'secondary';
export type SwitchSizes = 'regular' | 'small';

export interface SwitchProps extends BaseSwitchProps {
  color?: SwitchColors;
  size?: SwitchSizes;
}

const Switch = React.forwardRef(function Switch(
  props: SwitchProps,
  ref: React.ForwardedRef<any>,
) {
  const {
    className,
    children: label,
    color = 'primary',
    size = 'regular',
    ...rest
  } = props;

  return (
    <label className={clsx(className, wrapperCls)}>
      <BaseSwitch {...rest} ref={ref} className={clsx(switchCls)}>
        <SwitchThumb className={thumbCls} />
      </BaseSwitch>
      {label && <span className={labelCls}>{label}</span>}
    </label>
  );
});

Switch.displayName = 'Switch';

export default Switch;
