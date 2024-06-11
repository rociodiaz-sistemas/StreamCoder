import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Sun from '../../../assets/sun.svg';
import Moon from '../../../assets/moon.svg';

interface CelestialBodyProps {
  bodyType: 'sun' | 'moon';
  startRange: number;
  endRange: number;
}

const CelestialBody: React.FC<CelestialBodyProps> = ({
  bodyType,
  startRange,
  endRange,
}) => {
  // State to store current time
  const [currentTime, setCurrentTime] = useState<number>(
    new Date().getHours() + new Date().getMinutes() / 60,
  );

  // Animation controls
  const animationControls = useAnimation();

  // Initialize current time on page load
  useEffect(() => {
    setCurrentTime(new Date().getHours() + new Date().getMinutes() / 60);
  }, []);

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().getHours() + new Date().getMinutes() / 60,
      );
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  // Normalize endRange for ranges that span over midnight
  const normalizedEndRange =
    endRange < startRange ? endRange + 24 : endRange;

  // Calculate total duration in hours
  const totalDuration = normalizedEndRange - startRange;

  // Calculate the current progress of the animation based on the current time
  const animationProgress =
    (currentTime - startRange + 24) % 24 / totalDuration;

  // Calculate initial and final positions of the celestial body within the animation
  const initialX = 20; // Set appropriate initial X position
  const finalX = 120; // Set appropriate final X position
  const initialY = 20; // Set appropriate initial Y position
  const finalY = 50; // Set appropriate final Y position

  // Calculate remaining duration for the animation to complete
  const remainingDuration = (1 - animationProgress) * totalDuration * 3600;

  // Update animation controls when position changes
  useEffect(() => {
    animationControls.start({
      left: `${finalX}%`,
      top: `${finalY}%`,
      transition: {
        duration: remainingDuration > 0 ? remainingDuration : 0.1, // Ensure duration is non-negative
        ease: 'easeInOut', // Use easeInOut easing function for smoother movement
      },
    });
  }, [finalX, finalY, remainingDuration, animationControls]);

  return (
    <motion.div
      style={{ position: 'absolute', width: '20%', height: '20%' }}
      initial={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        opacity: 0.5,
      }}
      animate={animationControls}
    >
      {bodyType === 'sun' ? (
        <img src={Sun} alt="Sun" />
      ) : (
        <img src={Moon} alt="Moon" />
      )}
    </motion.div>
  );
};

export default CelestialBody;
