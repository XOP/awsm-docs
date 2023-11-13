import type { Meta, StoryObj } from '@storybook/react';

import { __DemoFlow__ } from '../../helpers';

import ButtonNext from './Button';

export default {
  title: 'Form/Button',
  component: ButtonNext,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button created with [React Aria](https://react-spectrum.adobe.com/react-aria/Button.html)',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonNext>;

export type Story = StoryObj<typeof ButtonNext>;

export const Base: Story = {
  args: {
    children: 'Hello',
  }
};

export const VariantSolid: Story = {
  args: {
    ...Base.args,
    variant: 'solid',
  },
};

export const VariantGhost: Story = {
  args: {
    ...Base.args,
    variant: 'ghost',
  },
};

export const VariantText: Story = {
  args: {
    ...Base.args,
    variant: 'text',
  },
};

export const ColorPrimary: Story = {
  args: {
    ...Base.args,
    color: 'primary',
  },
};

export const ColorSecondary: Story = {
  args: {
    ...Base.args,
    color: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true,
  },
};

export const SizeSmall: Story = {
  args: {
    ...Base.args,
    size: 'small',
  },
};

export const SizeRegular: Story = {
  args: {
    ...Base.args,
    size: 'regular',
  },
};

export const SizeLarge: Story = {
  args: {
    ...Base.args,
    size: 'large',
  },
};

export const AllVariantsPrimary: Story = {
  render: () => (
    <__DemoFlow__>
      <ButtonNext color="primary" variant="solid">
        Solid
      </ButtonNext>
      <ButtonNext color="primary" variant="ghost">
        Ghost
      </ButtonNext>
      <ButtonNext color="primary" variant="text">
        Text
      </ButtonNext>
    </__DemoFlow__>
  ),
};

export const AllVariantsSecondary: Story = {
  render: () => (
    <__DemoFlow__>
      <ButtonNext color="secondary" variant="solid">
        Solid
      </ButtonNext>
      <ButtonNext color="secondary" variant="ghost">
        Ghost
      </ButtonNext>
      <ButtonNext color="secondary" variant="text">
        Text
      </ButtonNext>
    </__DemoFlow__>
  ),
};
