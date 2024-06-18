import { Meta, StoryObj } from '@storybook/react';
import ComponentTime from '../components/storybook-tools/ComponentTime';
import withTimeSlider from '../../.storybook/decorators/withTimeSlider';

const meta: Meta<typeof ComponentTime> = {
  title: 'animations/TimeSlider',
  component: ComponentTime,
  tags: ['autodocs'],
  decorators: [withTimeSlider],
};

export default meta;

type Story = StoryObj<typeof ComponentTime>;

export const Default: Story = {
  args: { time: 12 }, // Default time value
};
