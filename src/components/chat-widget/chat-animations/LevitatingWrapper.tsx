import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface LevitatingWrapperProps extends BoxProps {
  children: React.ReactNode;
}

const LevitatingWrapper: React.FC<LevitatingWrapperProps> = ({ children, ...rest }) => {
  return (
    <Box {...rest} pos="relative" display="inline-block">
      <motion.div
        style={{
          display: 'inline-block',
        }}
        animate={{
          y: [0, -8, 0], // Moves up and down
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default LevitatingWrapper;
