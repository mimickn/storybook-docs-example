import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta = {
  title: 'Example/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルトカラーのボタン
 */
export const Default: Story = {
  args: {
    label: 'DefaultButton',
    onClick: () => {},
  },
};

/**
 * 赤色のボタン
 */
export const Red: Story = {
  args: {
    label: 'RedButton',
    color: 'red',
    onClick: () => {},
  },
};
