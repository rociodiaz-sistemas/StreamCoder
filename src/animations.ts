import { AnimationProps } from 'framer-motion';

export const itemSpringAnimationProps: AnimationProps = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, originY: 0 },
  exit: { scale: 0, opacity: 0 },
  transition: { type: 'spring', stiffness: 350, damping: 40 },
};
