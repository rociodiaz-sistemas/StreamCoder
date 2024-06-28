import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import MoneyRain, { MoneyRainProps } from '../components/chat-widget/chat-animations/MoneyRain';
// Meta information for the story
const meta: Meta<MoneyRainProps> = {
  title: 'Animations/MoneyRain',
  component: MoneyRain,
  argTypes: {
    numberOfBills: {
      control: 'number',
      defaultValue: 20,
    },
  },
  decorators: [
    (Story) => (
      <Box pos="relative" w="100vw" h="100vh">
        <Story />
      </Box>
    ),
  ],
};

export default meta;

const Template: StoryFn<MoneyRainProps> = (args) => <MoneyRain {...args} />;

export const Default = Template.bind({});
Default.args = {
  numberOfBills: 20,
};
