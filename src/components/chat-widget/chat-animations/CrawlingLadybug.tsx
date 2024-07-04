import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ladybugSvg from '../../../assets/ladybug-sus.svg';

type Position = {
  top: number;
  left: number;
};

const getRandom = (min: number, max: number): number => Math.random() * (max - min) + min;

const generateGridPath = (maxX: number, maxY: number): Position[] => {
  const path: Position[] = [];

  // Start from a random position within the container
  let startX = getRandom(10, maxX - 10);
  let startY = getRandom(10, maxY - 10);

  // Move horizontally to the right border
  for (let x = startX; x <= maxX - 10; x += 20) {
    path.push({ top: startY, left: x });
  }

  // Move vertically to the bottom border
  startY = maxY - 10;
  for (let y = startY; y >= 10; y -= 20) {
    path.push({ top: y, left: path[path.length - 1].left });
  }

  // Move horizontally to the left border
  startX = 10;
  for (let x = path[path.length - 1].left; x >= startX; x -= 20) {
    path.push({ top: path[path.length - 1].top, left: x });
  }

  // Move vertically to the top border
  startY = 10;
  for (let y = path[path.length - 1].top; y <= startY + 10; y += 20) {
    path.push({ top: y, left: path[path.length - 1].left });
  }

  return path;
};

const calculateRotation = (prev: Position, next: Position): number => {
  const deltaX = next.left - prev.left;
  const deltaY = next.top - prev.top;

  // Determine the angle of movement direction
  let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Calculate angle in degrees

  // Adjust angle to ladybug's default orientation (head up)
  angle += 90;

  // Normalize angle to be between -180 and 180 degrees
  if (angle > 180) {
    angle -= 360;
  } else if (angle < -180) {
    angle += 360;
  }

  return angle;
};

const CrawlingLadybug: React.FC = () => {
  const controls = useAnimation();
  const [path, setPath] = useState<Position[]>(generateGridPath(100, 100)); // Adjust dimensions as needed
  const [currentPosition, setCurrentPosition] = useState(0);
  const [initialRotation, setInitialRotation] = useState(getRandom(0, 360)); // Random initial rotation

  useEffect(() => {
    const moveLadybug = async () => {
      for (let i = 0; i < path.length; i++) {
        const nextPosition = path[i];

        if (i > 0) {
          const rotation = calculateRotation(path[i - 1], nextPosition);
          await controls.start({
            rotate: rotation,
            transition: { duration: 0.5, ease: 'easeInOut' },
          });
        } else {
          // Apply initial random rotation after a short delay
          await new Promise((resolve) => setTimeout(resolve, 500)); // Adjust delay time as needed
          await controls.start({
            rotate: initialRotation,
            transition: { duration: 0.5, ease: 'easeInOut' },
          });
        }

        await controls.start({
          top: `${nextPosition.top}%`,
          left: `${nextPosition.left}%`,
          transition: { duration: 3, ease: 'linear' },
        });

        setCurrentPosition(i);

        // Introduce a random pause between movements
        const minDirectionTime = 2000; // Adjust as needed
        await new Promise((resolve) => setTimeout(resolve, minDirectionTime));
      }
    };

    moveLadybug();
  }, [path, controls, initialRotation]);

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>
      <motion.div
        animate={controls}
        style={{
          position: 'absolute',
          top: `${path[currentPosition].top}%`,
          left: `${path[currentPosition].left}%`,
        }}
      >
        <motion.img
          src={ladybugSvg}
          alt="Ladybug"
          style={{
            width: '25px',
            height: '25px',
            originX: 0.5,
            originY: 0.5,
            rotate: initialRotation, // Start with random initial rotation
          }}
          animate={{
            rotate: [-5, 5, -3, 3, 0], // Smooth wobble animation
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
};

export default CrawlingLadybug;
