import { Meta, StoryObj } from '@storybook/react';
import { ChatProps } from '../components/chat-widget/Chat';
import Chat from '../components/chat-widget/Chat';
import withDivWrapper from '../../.storybook/decorators/withDivWrapper';

const meta: Meta<ChatProps> = {
  title: 'Widgets/Chat',
  component: Chat,
  tags: ['autodocs'],
  decorators: [withDivWrapper],
};

export default meta;

type Story = StoryObj<typeof Chat>;

export const Normal: Story = {
  args: {
    height: 7,
    defaultHeight: 7,
    width: 7,
    defaultWidth: 7,
  },
};
