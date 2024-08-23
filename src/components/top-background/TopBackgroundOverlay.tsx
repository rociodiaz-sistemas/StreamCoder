import React from 'react';
import { Box } from '@chakra-ui/react';
import MoneyRain from '../chat-widget/chat-animations/MoneyRain';
import FirefliesAnimation from '../chat-widget/chat-animations/Fireflies';

const TopBackgroundOverlay: React.FC = () => {
  return (
    <Box
      pos="relative"
      overflow="hidden" // Adjust as needed
      w="100vw"
      h="100vh"
      bgGradient="transparent"
    >
      {/* <MoneyRain /> */}
      <FirefliesAnimation />
    </Box>
  );
};

export default TopBackgroundOverlay;
