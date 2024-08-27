import React from 'react';
import { Box } from '@chakra-ui/react';
import useDynamicGradientColor from '../../hooks/useDynamicGradient';
import AnimatedBackground from '../chat-widget/chat-animations/AnimatedBackground';
import CloudParallax from './parallax-clouds/ParallaxClouds';
import { useTimeManager } from '../../store/contexts/TimeManagerContext';

const BackgroundOverlay: React.FC = () => {
  const { gradientColor } = useTimeManager();
  return (
    <Box pos="relative" w="100vw" h="100vh" bgGradient={gradientColor}>
      <AnimatedBackground />
    </Box>
  );
};

export default BackgroundOverlay;
