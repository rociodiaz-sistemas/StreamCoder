import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

// Utility function to calculate luminance
const calculateLuminance = (r: number, g: number, b: number): number => {
  const a = [r, g, b].map((value) => {
    const normalized = value / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

// Function to determine if the color is light or dark
const isColorLight = (gradient: string): boolean => {
  // Extract the first color stop for luminance calculation
  const match = gradient.match(
    /rgba?\((\d+),(\d+),(\d+)(?:,([01]|0?\.\d+))?\)/,
  );
  if (match) {
    const [_, r, g, b] = match.map(Number);
    return calculateLuminance(r, g, b) > 0.5;
  }
  return false;
};

interface SmartGradientTextProps extends TextProps {
  text: string;
  gradient: string;
}

const SmartGradientText: React.FC<SmartGradientTextProps> = ({
  text,
  gradient,
  ...rest
}) => {
  // Determine if the gradient is light or dark to set the text color
  const textColor = isColorLight(gradient) ? 'black' : 'white';
  const brightness = gradient.includes('dark')
    ? 'brightness(1.8)'
    : 'brightness(0.8)';

  return (
    <Text
      fontSize="20px"
      fontWeight="bold"
      background={`linear-gradient(${gradient})`}
      backgroundClip="text"
      color={textColor}
      filter={brightness}
      {...rest} // Apply any additional props
    >
      {text}
    </Text>
  );
};

export default SmartGradientText;
