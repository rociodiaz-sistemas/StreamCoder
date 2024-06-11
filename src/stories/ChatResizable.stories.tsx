import { Meta, StoryObj } from '@storybook/react';
import ResizableChat from '../components/chat-widget/ResizableChat';
import { MessageModel } from '../utils/models';

const meta: Meta<MessageModel> = {
  title: 'Widgets/ChatResizable',
  component: ResizableChat,
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResizableChat>;

export const Common: Story = {
  args: {},
};
