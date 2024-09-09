// ChatMessage.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import ChatMessage from '../components/chat-widget/chat-message/ChatMessage';
import { MessageModel, Role } from '../utils/models';
import { Box } from '@chakra-ui/react';
import useDynamicGradientColor from '../hooks/useDynamicGradient';

const meta: Meta<typeof ChatMessage> = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme; // Get the selected theme
      let hours = 0;
      let minutes = 0;

      // Assign dynamic hours and minutes based on selectedTheme
      switch (selectedTheme) {
        case 'morning':
          hours = 6;
          minutes = 0;
          break;
        case 'day':
          hours = 12;
          minutes = 0;
          break;
        case 'afternoon':
          hours = 18;
          minutes = 0;
          break;
        // default case (night) is already covered by initialization
      }

      const gradientColor = useDynamicGradientColor(hours, minutes); // Use hours and minutes here

      return (
        <div>
          <Box pos="relative" w="600px" h="300px" pt="30px" pl='30px' bgGradient={gradientColor} wordBreak='break-word'>
            <Story {...context} />
          </Box>
        </div>
      );
    },
  ],
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
  content: '¡Amamos y odiamos programarAmamos y odiamos programarAmamos y odiamos programarAmamos y odiamos programarAmamos y odiamos programarAmamos y odiamos programarAmamos y odiamos programarAmamos y odiamos programarAmamos y odiamos programarAmamos y odiamos programarAmamos y odiamos programarAmamos y odiamos programar!',
  firstMessage: false,
  isHighlighted: false,
  suscriber: false,
  isReply: false,
  hasBits: false,
  bits: 1000,
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

export const Suscriber: Story = {
  args: {
    message: {
      ...baseMessage,
      type: 'common',
      suscriber: true,
    },
  },
};
