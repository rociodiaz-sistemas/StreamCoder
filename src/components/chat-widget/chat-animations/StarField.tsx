import React from 'react';
import { motion, Transition } from 'framer-motion';

// Define types for the props
interface StarProps {
  left: number;
  top: number;
  delay: number;
  maxOpacity: number;
}

const Star: React.FC<StarProps> = ({ left, top, delay, maxOpacity }) => {
  const transition: Transition = {
    duration: 4, // Duration of twinkle animation
    repeat: Infinity,
    ease: 'easeInOut',
    delay,
  };

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        backgroundColor: 'white',
        borderRadius: '50%',
        left: `${left}%`,
        top: `${top}%`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, maxOpacity, 0] }} // Use maxOpacity for varying brightness
      transition={transition}
    />
  );
};

// Define types for the StarField props
interface StarFieldProps {
  numStars?: number;
}

const StarField: React.FC<StarFieldProps> = ({ numStars = 90 }) => {
  const stars = Array.from({ length: numStars }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    maxOpacity: Math.random() * 0.8 + 0.2, // Random opacity between 0.2 and 1
  }));

  return (
    <div
      id="starfield"
      style={{
        position: 'absolute',
        width: '100%',
        height: '50%',
        overflow: 'hidden',
      }}
    >
      {stars.map((star) => (
        <Star
          key={star.id}
          left={star.left}
          top={star.top}
          delay={star.delay}
          maxOpacity={star.maxOpacity}
        />
      ))}
    </div>
  );
};

export default StarField;
