// src/stories/LevitatingWrapper.stories.tsx
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { Meta, StoryFn } from '@storybook/react';
import LevitatingWrapper from '../components/chat-widget/chat-animations/LevitatingWrapper';

export default {
  title: 'Animations/LevitatingWrapper',
  component: LevitatingWrapper,
} as Meta;

const Template: StoryFn = (args) => (
  <ChakraProvider>
    <Flex align="center" justify="center" h="100vh">
      <LevitatingWrapper {...args}>
        <Box
          w="100px"
          h="100px"
          borderRadius="10px"
          bgColor="teal"
        />
      </LevitatingWrapper>
    </Flex>
  </ChakraProvider>
);

export const Default = Template.bind({});
Default.args = {};
