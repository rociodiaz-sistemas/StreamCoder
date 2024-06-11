import React from 'react';
import { motion, AnimationProps } from 'framer-motion';

type AnimationComponentProps = {
  animationProps: AnimationProps;
  children: React.ReactNode;
};

const Animation: React.FC<AnimationComponentProps> = ({ animationProps, children }) => {
  return (
    <motion.div {...animationProps}>
      {children}
    </motion.div>
  );
};

export default Animation;
