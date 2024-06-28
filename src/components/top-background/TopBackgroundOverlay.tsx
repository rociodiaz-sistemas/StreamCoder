import React from 'react';
import { Box } from '@chakra-ui/react';
import MoneyRain from '../chat-widget/chat-animations/MoneyRain';

const TopBackgroundOverlay: React.FC = () => {
  return (
    <Box
      pos="relative"
      overflow="hidden" // Adjust as needed
      w="100vw"
      h="100vh"
      bgGradient="transparent"
    >
      <MoneyRain />
    </Box>
  );
};

export default TopBackgroundOverlay;
