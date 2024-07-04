import React from 'react';
import useThemeMapping from '../../../hooks/useThemeMapping';
import { Box } from '@chakra-ui/react';
import { useChatContext } from '../../../store/contexts/ChatContext';
import { MessageBoxStyle, MessageType } from '../../../utils/models';
import { AnimationProps } from 'framer-motion';
import { itemSpringAnimationProps } from '../../../animations';
import Animation from '../Animation';
import '../chat-animations/diamond-shine/diamond-shine-keyframes.css';
import CrawlingLadybug from '../chat-animations/CrawlingLadybug';

type MessageBoxProps = {
  children: React.ReactNode;
  messageType: MessageType;
};

const animationPropsMap: { [key in MessageType]: AnimationProps } = {
  common: itemSpringAnimationProps,
  highlighted: itemSpringAnimationProps,
  bits: itemSpringAnimationProps,
  // Add more message types as needed
};

export default function MessageBox({ children, messageType }: MessageBoxProps) {
  const themeInfo = useThemeMapping();
  const { fontSize } = useChatContext();
  const messageBoxStyle = themeInfo.getMessageBoxStyles(messageType) || {};
  const containerRef = React.useRef<HTMLDivElement>(null);

  const {
    borderColor,
    background,
    backgroundGradient,
    gifBackground,
    boxShadow,
  } = messageBoxStyle as MessageBoxStyle;

  // Get animation props based on message type from the mapping
  const animationProps =
    animationPropsMap[messageType] || itemSpringAnimationProps;

  const BitsStyle = {
    border: '3px solid transparent', // Initial border settings
    borderImage: 'linear-gradient(to right, #A23EFC, #D3A6FF)', // Gradient border
    borderImageSlice: '1',
    padding: '20px',
    animation: 'pulsate 3s infinite',
  };

  return (
    <Box pt="0.5em">
      <Animation animationProps={animationProps}>
        <Box
          ref={containerRef as React.RefObject<HTMLDivElement>}
          w="90%"
          p="1em"
          fontSize={fontSize}
          bgImage={backgroundGradient ? undefined : gifBackground}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgGradient={backgroundGradient}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="12px"
          shadow={boxShadow ? '0px 4px 6px rgba(0, 0, 0, 0.25)' : 'none'}
          bgColor={background}
          style={messageType === 'bits' ? BitsStyle : { position: 'relative' }}
        >
          {children}
          <CrawlingLadybug /> {/* Render Ladybug component */}
        </Box>
      </Animation>
    </Box>
  );
}
