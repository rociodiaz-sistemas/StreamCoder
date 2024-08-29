import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface TextWithBorderProps extends TextProps {
  text: string;
  gradient: string;
}

const TextWithBorder: React.FC<TextWithBorderProps> = ({
  text,
  gradient,
  ...rest
}) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* White border text */}
      <Text
        as="b"
        fontSize="22px"
        color="black"
        position="absolute"
        top="0"
        left="0"
        zIndex={0}
        // Make text slightly larger for the border effect
        transform="scale(1.02)"
        // This will ensure the border text is behind the gradient text
        pointerEvents="none"
      >
        {text}
      </Text>

      {/* Gradient text */}
      <Text
        as="b"
        fontSize="20px"
        bgGradient={`linear(${gradient})`}
        bgClip="text"
        color="transparent"
        position="relative"
        zIndex={1}
        {...rest}
      >
        {text}
      </Text>
    </div>
  );
};

export default TextWithBorder;
