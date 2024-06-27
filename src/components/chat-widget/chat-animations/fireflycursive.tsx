// FireflyWritingAnimation.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import '../../../../.storybook/storybook.css';

const FireflyWritingAnimation: React.FC<{ text: string }> = ({ text = 'hello' }) => {
  const letters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each letter
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Box
      className='font-cursive'
      display="inline-block" // Use a cursive font
      fontSize="2xl" // Adjust font size as needed
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline-block' }}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </Box>
  );
};

export default FireflyWritingAnimation;
