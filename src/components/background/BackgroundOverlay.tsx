import React from 'react';
import { Box } from '@chakra-ui/react';
import useDynamicGradientColor from '../../hooks/useDynamicGradient';
import AnimatedBackground from '../chat-widget/chat-animations/AnimatedBackground';

const BackgroundOverlay: React.FC = () => {
  const backgroundGradient = useDynamicGradientColor();
  return (
    <Box
      pos="relative"
      overflow="hidden" // Adjust as needed
      w="100vw"
      h="100vh"
      bgGradient={backgroundGradient}
    >
      <AnimatedBackground />
    </Box>
  );
};

export default BackgroundOverlay;