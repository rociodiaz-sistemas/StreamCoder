import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import moonsvg from '../../../assets/moons/moon.svg'; // Default moon SVG
import sunsvg from '../../../assets/sun.svg'; // Default sun SVG
import { Hemisphere, Moon } from 'lunarphase-js';

// Import all SVGs for different lunar phases
import newmoon from '../../../assets/moons/newmoon.svg';
import waxingcrescent from '../../../assets/moons/waxingcrescent.svg';
import firstquarter from '../../../assets/moons/firstquarter.svg';
import waxinggibbous from '../../../assets/moons/waxinggibbous.svg';
import fullmoon from '../../../assets/moons/fullmoon.svg';
import waninggibbous from '../../../assets/moons/waninggibbous.svg';
import lastquarter from '../../../assets/moons/lastquarter.svg';
import waningcrescent from '../../../assets/moons/waningcrescent.svg';

interface Time {
  hours: number;
  minutes: number;
}

interface MoonAnimationProps {
  startTime: Time;
  peakTime: Time;
  endTime: Time;
  currentTime?: Time | Date; // Optional current time prop
  overNight?: boolean; // New prop to indicate overnight time range
  astralbody: 'moon' | 'sun'; // New prop to specify moon or sun
}

const MoonAndSunAnimation: React.FC<MoonAnimationProps> = ({ startTime, peakTime, endTime, currentTime, overNight, astralbody }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [moonPhase, setMoonPhase] = useState<string | null>(null);

  useEffect(() => {
    const date = new Date();
    const phase = Moon.lunarPhase(date, {
      hemisphere: Hemisphere.SOUTHERN, // Adjust hemisphere as needed
    });
    setMoonPhase(phase);
  }, []);

  const getTimeInMinutes = (time: Time | Date): number => {
    if ('hours' in time) {
      // It's of type Time
      return time.hours * 60 + time.minutes;
    } else {
      // It's of type Date
      return time.getHours() * 60 + time.getMinutes();
    }
  };

  const convertToContinuousScale = (hours: number, minutes: number, startHours: number, endHours: number) => {
    if (overNight) {
      return hours < startHours ? (hours + 24) * 60 + minutes : hours * 60 + minutes;
    }
    return hours * 60 + minutes;
  };

  const convertTimeToContinuousScale = (time: Time) => convertToContinuousScale(time.hours, time.minutes, startTime.hours, endTime.hours);

  const startMinutes = convertTimeToContinuousScale(startTime);
  const peakMinutes = convertTimeToContinuousScale(peakTime);
  const endMinutes = convertTimeToContinuousScale(endTime);

  const calculatePosition = (currentMinutes: number): number => {
    let position = 0;

    if (overNight) {
      if (currentMinutes < startMinutes) {
        currentMinutes += 24 * 60; // Adjust for overnight wrap-around
      }
      if (currentMinutes <= peakMinutes) {
        position = (currentMinutes - startMinutes) / (peakMinutes - startMinutes);
      } else if (currentMinutes <= endMinutes) {
        position = 1 - (currentMinutes - peakMinutes) / (endMinutes - peakMinutes);
      }
    } else {
      if (currentMinutes >= startMinutes && currentMinutes <= peakMinutes) {
        position = (currentMinutes - startMinutes) / (peakMinutes - startMinutes);
      } else if (currentMinutes > peakMinutes && currentMinutes <= endMinutes) {
        position = 1 - (currentMinutes - peakMinutes) / (endMinutes - peakMinutes);
      }
    }

    return Math.max(0, Math.min(1, position));
  };

  useEffect(() => {
    const now = currentTime || new Date(); // Use currentTime if provided, otherwise use current time
    const currentMinutes = getTimeInMinutes(now);
    const position = calculatePosition(currentMinutes);
    setCurrentPosition(position);
  }, [startTime, peakTime, endTime, currentTime, overNight]); // Update when any of these props change

  // Map lunar phase names to corresponding SVGs
  const phaseToSvg: { [key: string]: string } = {
    New: newmoon,
    'Waxing Crescent': waxingcrescent,
    'First Quarter': firstquarter,
    'Waxing Gibbous': waxinggibbous,
    Full: fullmoon,
    'Waning Gibbous': waninggibbous,
    'Last Quarter': lastquarter,
    'Waning Crescent': waningcrescent,
  };

  // Determine which SVG to use based on the astralbody prop
  const astralSvg = astralbody === 'moon' ? (moonPhase ? phaseToSvg[moonPhase] : moonsvg) : sunsvg;

  // Adjust glow color based on astralbody
  const glowColor = astralbody === 'moon' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 245, 107, 0.8)'; // Yellowish for sun

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: `${(1 - currentPosition) * 100}%`, // Invert position to start at the bottom
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          opacity: '0.5',
          boxShadow: `0 0 20px 20px ${glowColor}`, // Soft and large spread glow effect with adjusted color
        }}
      />
      <motion.img
        src={astralSvg}
        alt={astralbody === 'moon' ? 'Moon' : 'Sun'}
        style={{
          width: 50,
          height: 50,
          position: 'relative',
          zIndex: 1, // Ensure moon or sun SVG is on top of the glow
        }}
      />
    </motion.div>
  );
};

export default MoonAndSunAnimation;
