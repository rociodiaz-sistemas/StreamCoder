import { Meta, StoryObj } from '@storybook/react';
import { ChatProps } from '../components/chat-widget/Chat';
import Chat from '../components/chat-widget/Chat';

const meta: Meta<ChatProps> = {
  title: 'Widgets/Chat',
  component: Chat,
  tags: ['autodocs'],
};

export default meta;

// type Story = (args: ChatProps) => JSX.Element;
type Story = StoryObj<typeof Chat>;

export const Normal: Story = {
  args: {},
};
