import { Meta, StoryObj } from '@storybook/react';
import ResizableChat from '../components/chat-widget/ResizableChat';
import { MessageModel } from '../utils/models';
import withTimeManagerProvider from '../../.storybook/decorators/withTimeManagerProvider'

const meta: Meta<MessageModel> = {
  title: 'Widgets/ChatResizable',
  component: ResizableChat,
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  tags: ['autodocs'],
  decorators: [withTimeManagerProvider]
};

export default meta;

type Story = StoryObj<typeof ResizableChat>;

export const Common: Story = {
  args: {},
};
