import React from 'react';
import { motion } from 'framer-motion';
import dollarBillSvg from '../../../assets/dollar-animated.svg'; // Adjust the path as needed

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

const DollarBill: React.FC = () => {
  const duration = getRandom(3, 6);
  const delay = getRandom(0, 5);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '50px', // Adjust size as needed
        height: 'auto',
        bottom: '110%', // Start above the container
        left: `${getRandom(0, 100)}%`, // Random horizontal position
      }}
      animate={{
        y: '100vh', // Move down past the bottom of the container
        rotate: [0, 15, -15, 15], // Smooth oscillating rotation
        scale: [1, 1.2, 1], // Slight scaling effect
      }}
      transition={{
        duration,
        ease: 'easeInOut',
        repeat: Infinity,
        delay,
        repeatType: 'loop', // Loop the animation
      }}
    >
      <img
        src={dollarBillSvg}
        alt="Dollar Bill"
        style={{ width: '100%', height: 'auto' }}
      />
    </motion.div>
  );
};

export default DollarBill;
