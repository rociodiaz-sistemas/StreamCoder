import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

// Firefly component
const Firefly: React.FC<{ top: number; left: number; opacity: number }> = ({
  top,
  left,
  opacity,
}) => {
  const getRandom = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        backgroundColor: 'yellow',
        boxShadow: '0 0 10px yellow',
        opacity,
        top: `${top}%`,
        left: `${left}%`,
      }}
      animate={{
        x: [0, getRandom(-50, 50), getRandom(-100, 100)],
        y: [0, getRandom(-50, 50), getRandom(-100, 100)],
        opacity: [opacity, opacity * 0.5, opacity],
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
  const fireflies = useSelector((state: RootState) => state.effects.fireflies);

  return (
    <Box pos="relative" overflow="hidden" w="100%" h="100%">
      {fireflies.map((firefly) => (
        <Firefly
          key={firefly.id}
          top={firefly.top}
          left={firefly.left}
          opacity={firefly.opacity}
        />
      ))}
    </Box>
  );
};

export default FirefliesAnimation;
