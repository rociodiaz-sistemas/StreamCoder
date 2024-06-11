import { Meta, StoryObj } from '@storybook/react';
import ChatMessage from '../components/chat-widget/chat-message/ChatMessage';
import { MessageModel, Role } from '../utils/models';

const meta: Meta<typeof ChatMessage> = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ChatMessage>;

const baseMessage: MessageModel = {
  msgId: '1',
  author: {
    userId: '01',
    color: 'pink',
    displayName: 'AntoniaVaquita',
    username: 'AntoniaVaquita',
    roles: [{ id: Role.Viewer, name: 'Viewer' }],
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
  type: 'common',
};

export const Common: Story = {
  args: {
    message: {
      ...baseMessage,
      type: 'common',
    },
  },
};

export const Highlighted: Story = {
  args: {
    message: {
      ...baseMessage,
      type: 'highlighted',
    },
  },
};

export const Bits: Story = {
  args: {
    message: {
      ...baseMessage,
      type: 'bits',
    },
  },
};
