import type {
  Meta, StoryObj,
} from '@storybook/react';
import { Button } from './Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
}

export default meta

/**
 * Describe the story.
 */
export const Default: StoryObj<typeof Button> = {
  args: {},
}
