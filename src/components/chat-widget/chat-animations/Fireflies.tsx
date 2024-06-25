import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Firefly component
const Firefly: React.FC = () => {
  const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        backgroundColor: 'yellow',
        boxShadow: '0 0 10px yellow',
        opacity: 0.8,
        top: `${getRandom(0, 100)}%`,
        left: `${getRandom(0, 100)}%`,
      }}
      animate={{
        x: [0, getRandom(-50, 50), getRandom(-100, 100)],
        y: [0, getRandom(-50, 50), getRandom(-100, 100)],
        opacity: [0.8, 0.2, 0.8],
      }}
      transition={{
        duration: getRandom(5, 10),
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    />
  );
};

// FirefliesAnimation component
const FirefliesAnimation: React.FC = () => {
  const numberOfFireflies = 20; // Adjust the number of fireflies as needed

  return (
    <Box
      pos="relative"
      overflow="hidden"
      w="100%"
      h="100%"
    >
      {Array.from({ length: numberOfFireflies }).map((_, index) => (
        <Firefly key={index} />
      ))}
    </Box>
  );
};
export default FirefliesAnimation;
