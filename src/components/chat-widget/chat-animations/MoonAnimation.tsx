import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Moon from '../../../assets/moon.svg';
import { timeRanges } from '../../../utils/helpers';

const calculateMoonPosition = (currentHour: number, currentMinute: number, start: number, end: number) => {
  const rangeMid = (start + end) / 2;
  const currentTime = currentHour + currentMinute / 60;
  let position, opacity;

  if (currentTime >= start && currentTime <= rangeMid) {
    position = ((currentTime - start) / (rangeMid - start)) * 100;
    opacity = ((currentTime - start) / (rangeMid - start));
  } else if (currentTime > rangeMid && currentTime < end) {
    position = 100 - ((currentTime - rangeMid) / (end - rangeMid)) * 100;
    opacity = 1 - ((currentTime - rangeMid) / (end - rangeMid));
  } else {
    position = 0;
    opacity = 0;
  }

  return { position, opacity };
};

const MoonAnimation: React.FC = () => {
  const [moonPosition, setMoonPosition] = useState(0);
  const [moonOpacity, setMoonOpacity] = useState(1);

  useEffect(() => {
    const updateMoonPosition = () => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();

      let position = 0;
      let opacity = 1;

      for (const { start, end } of Object.values(timeRanges)) {
        if (currentHour >= start && currentHour < end) {
          const { position: pos, opacity: op } = calculateMoonPosition(currentHour, currentMinute, start, end);
          position = pos;
          opacity = op;
          break;
        }
      }

      setMoonPosition(position);
      setMoonOpacity(opacity);
    };

    updateMoonPosition();
    const intervalId = setInterval(updateMoonPosition, 1000); // Update every second for testing

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      id="moon-animation"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <motion.img
        style={{
          position: 'absolute',
          bottom: `${moonPosition}%`,
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: moonOpacity,
          width: '50px', // Set appropriate moon size
          height: '50px', // Set appropriate moon size
        }}
        src={Moon}
        alt="moon"
        transition={{ duration: 1 }} // Smooth transition
      />
    </motion.div>
  );
};

export default MoonAnimation;
