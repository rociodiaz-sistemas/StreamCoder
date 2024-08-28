import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';

interface HoverGifIconButtonProps {
  staticImageSrc: string;
  gifSrc: string;
  size?: string; // Optional: Allows for dynamic sizing
}

const HoverGifIconButton: React.FC<HoverGifIconButtonProps> = ({
  staticImageSrc,
  gifSrc,
  size = '40px',
}) => {
  return (
    <IconButton
      aria-label="Hover GIF Icon Button"
      icon={
        <Box position="relative" width={size} height={size}>
          {/* Static image */}
          <Box
            as="img"
            src={staticImageSrc}
            alt="Static Image"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            transition="opacity 0.3s ease"
            _hover={{ opacity: 0, display: 'none' }} // Hide static image on hover
          />
          {/* Animated GIF */}
          <Box
            as="img"
            src={gifSrc}
            alt="Animated GIF"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            display="none" // Hide GIF by default
            _hover={{ display: 'block' }} // Show GIF on hover
          />
        </Box>
      }
      variant="outline"
      colorScheme="teal"
      // Additional Chakra UI props can be added here
    />
  );
};

export default HoverGifIconButton;
