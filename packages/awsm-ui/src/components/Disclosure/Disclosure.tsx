import * as React from 'react';

import clsx from 'clsx';

import {
  Disclosure as BaseDisclosure,
  DisclosureProps as BaseDisclosureProps,
} from '@headlessui/react';

import { disclosureCls, toggleCls, contentCls } from './Disclosure.css';

export type DisclosureColors = 'primary' | 'secondary';
export type DisclosureVariants = 'regular' | 'strong';

export interface DisclosureProps extends BaseDisclosureProps<'div'> {
  children: React.ReactNode;
  toggle: React.ReactNode;
  color?: DisclosureColors;
  variant?: DisclosureVariants;
  showIcon?: boolean;
}

const Disclosure = React.forwardRef(function Disclosure(
  props: DisclosureProps,
  ref: React.ForwardedRef<any>,
) {
  const {
    className,
    toggle,
    children: content,
    color = 'primary',
    variant = 'regular',
    showIcon = true,
    ...rest
  } = props;

  return (
    <BaseDisclosure
      {...rest}
      ref={ref}
      className={clsx(className, disclosureCls)}
    >
      <BaseDisclosure.Button className={toggleCls}>
        {toggle}
      </BaseDisclosure.Button>
      <BaseDisclosure.Panel className={contentCls}>
        {content}
      </BaseDisclosure.Panel>
    </BaseDisclosure>
  );
});

Disclosure.displayName = 'Disclosure';

export default Disclosure;
