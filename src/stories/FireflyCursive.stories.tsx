import { Meta, StoryObj } from '@storybook/react';
import FireflyWritingAnimation from '../components/chat-widget/chat-animations/fireflycursive';


const meta: Meta = {
  title: 'Widgets/FireflyWritingAnimation',
  component: FireflyWritingAnimation,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FireflyWritingAnimation>;

export const Normal: Story = {
  args: {
  },
};
