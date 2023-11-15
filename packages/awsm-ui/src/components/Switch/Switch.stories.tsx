import type { Meta, StoryObj } from '@storybook/react';

import { __DemoFlow__ } from '../../helpers';

import Switch from './Switch';

export default {
  title: 'Form/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Switch created with [Radix UI](https://www.radix-ui.com/primitives/docs/components/switch)',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Base: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    ...Base.args,
    defaultChecked: true,
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
    defaultChecked: true,
  },
};

export const SizeRegular: Story = {
  args: {
    ...Base.args,
  },
};

export const SizeSmall: Story = {
  args: {
    ...Base.args,
    size: 'small',
  },
};

export const LabelRegular: Story = {
  render: () => <Switch>Awesome</Switch>,
};

export const LabelSmall: Story = {
  render: () => <Switch size="small">Awesome</Switch>,
};

export const AllColors: Story = {
  render: () => (
    <__DemoFlow__>
      <Switch color="primary">Awesome</Switch>
      <Switch color="secondary">Awesome</Switch>
    </__DemoFlow__>
  ),
};
