import type { Meta, StoryObj } from '@storybook/react';

import { __DemoStack__ } from '../../helpers';

import Disclosure from './Disclosure';

export default {
  title: 'Content/Disclosure',
  component: Disclosure,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Disclosure created with [Headless UI](https://headlessui.com/react/disclosure)',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Disclosure>;

type Story = StoryObj<typeof Disclosure>;

const Content = () => (
  <p>
    The bedrock of our Design System, Foundations, encompasses the core visual
    elements that stitch together seamless user experiences.
  </p>
);

export const Base: Story = {
  args: {
    toggle: 'Design System Foundations',
    children: <Content />,
  },
};

export const ColorPrimary: Story = {
  args: {
    toggle: 'Design System Foundations',
    children: <Content />,
    color: 'primary',
  },
};

export const ColorSecondary: Story = {
  args: {
    toggle: 'Design System Foundations',
    children: <Content />,
    color: 'secondary',
  },
};

export const VariantRegular: Story = {
  args: {
    toggle: 'Design System Foundations',
    children: <Content />,
    variant: 'regular',
  },
};

export const VariantStrong: Story = {
  args: {
    toggle: 'Design System Foundations',
    children: <Content />,
    variant: 'strong',
  },
};

export const AllVariantsPrimary: Story = {
  render: () => (
    <__DemoStack__>
      <Disclosure
        color="primary"
        variant="regular"
        toggle="Design System Foundations"
      >
        <Content />
      </Disclosure>
      <Disclosure
        color="primary"
        variant="strong"
        toggle="Design System Foundations"
      >
        <Content />
      </Disclosure>
    </__DemoStack__>
  ),
};

export const AllVariantsSecondary: Story = {
  render: () => (
    <__DemoStack__>
      <Disclosure
        color="secondary"
        variant="regular"
        toggle="Design System Foundations"
      >
        <Content />
      </Disclosure>
      <Disclosure
        color="secondary"
        variant="strong"
        toggle="Design System Foundations"
      >
        <Content />
      </Disclosure>
    </__DemoStack__>
  ),
};
