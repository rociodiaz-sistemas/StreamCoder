import React from 'react';
import { Meta } from '@storybook/react';
import ChatMessage, {
  MessageProps,
} from '../components/chat-widget/chat-message/ChatMessage';
import { ChatContextProvider } from '../store/contexts/ChatContext';

const meta: Meta<MessageProps> = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  tags: ['autodocs'],
};

export default meta;

type Story = (args: MessageProps) => JSX.Element;

export const Normal: Story<MessageProps> = (args: MessageProps) => {
  return (
    <ChatContextProvider>
      <ChatMessage {...args} />
    </ChatContextProvider>
  );
};

Normal.args = {
  msgId: '1',
  author: {
    userId: '01',
    color: 'pink',
    displayName: 'AntoniaVaquita',
    username: 'AntoniaVaquita',
    role: { 1: 'Viewer' },
    badges: [],
    monthsSuscribed: 1,
  },
  content: '¡Amamos y odiamos programar!',
  firstMessage: false,
  isHighlighted: false,
  suscriber: false,
  isReply: false,
  hasBits: false,
  bits: 0,
  hasEmotes: false,
  emotes: [],
  type: 'common', // Make sure the message type is correct
};
