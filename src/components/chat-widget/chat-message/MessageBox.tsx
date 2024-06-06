import React from 'react';
import useThemeMapping from '../../../hooks/useThemeMapping';
import { Box } from '@chakra-ui/react';
import { useChatContext } from '../../../store/contexts/ChatContext';
import { MessageBoxStyle, MessageType } from '../../../utils/models';
import { AnimationProps } from "framer-motion";
import { itemSpringAnimationProps } from '../../../animations';
import Animation from '../Animation';

type MessageBoxProps = {
  children: React.ReactNode;
  messageType: MessageType;
};

const animationPropsMap: { [key in MessageType]: AnimationProps } = {
  common: itemSpringAnimationProps,
  highlighted: itemSpringAnimationProps,
  bits: itemSpringAnimationProps
  // Add more message types as needed
};

export default function MessageBox({ children, messageType }: MessageBoxProps) {
  const themeInfo = useThemeMapping();
  const { fontSize } = useChatContext();
  const messageBoxStyle = themeInfo.getMessageBoxStyles(messageType) || {};

  const {
    borderColor,
    background,
    backgroundGradient,
    gifBackground,
    boxShadow,
  } = messageBoxStyle as MessageBoxStyle;

  // Get animation props based on message type from the mapping
  const animationProps = animationPropsMap[messageType] || itemSpringAnimationProps;

  return (
    <Box paddingTop="0.5em">
      <Animation animationProps={animationProps}>
        <Box
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
        >
          {children}
        </Box>
      </Animation>
    </Box>
  )
}