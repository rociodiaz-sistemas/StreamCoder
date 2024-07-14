import { Meta, StoryObj } from '@storybook/react';
import { ChatProps } from '../components/chat-widget/Chat';
import withDivWrapper from '../../.storybook/decorators/withDivWrapper';
import OnlyMessagesChat from '../components/only-messages/OnlyMessagesChat';

const meta: Meta<ChatProps> = {
  title: 'Widgets/OnlyMessagesChat',
  component: OnlyMessagesChat,
  tags: ['autodocs'],
  decorators: [withDivWrapper],
};

export default meta;

type Story = StoryObj<typeof OnlyMessagesChat>;

export const Normal: Story = {
  args: {
    height: 7,
    defaultHeight: 7,
    width: 7,
    defaultWidth: 7,
  },
};
