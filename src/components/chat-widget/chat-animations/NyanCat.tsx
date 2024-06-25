import React from 'react';
import { motion } from 'framer-motion';
import nyancat from '../../../assets/cat-nyan-cat.gif';

const NyanCatAnimation: React.FC = () => {
  return (
    <motion.div
      id='nyan-cat-animation'
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 3,
      }}
    >
      <motion.img
        src={nyancat}
        alt="Nyan Cat"
        style={{
          position: 'absolute',
          width: '55%', // Adjust the width as needed
          height: 'auto',
          top: '0%',
          transform: 'translateY(-50%)',
        }}
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.div>
  );
};

export default NyanCatAnimation;
