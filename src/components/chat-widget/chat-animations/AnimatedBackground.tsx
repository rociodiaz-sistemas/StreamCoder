import { Box, useTheme } from '@chakra-ui/react';
import React, { ReactNode, useEffect, useState } from 'react';
import UFOComponent from './UFO';
import MoonAndSunAnimation from './MoonAndSun';
import {
  MOON_END_TIME,
  MOON_PEAK_TIME,
  MOON_START_TIME,
  SUN_END_TIME,
  SUN_PEAK_TIME,
  SUN_START_TIME,
} from '../../../utils/helpers';
import NyanCatAnimation from './NyanCat';
import ParallaxClouds from '../../background/parallax-clouds/ParallaxClouds';
import Cloud1Afternoon from '../../background/parallax-clouds/Clouds-4/3.png';
import Cloud2Afternoon from '../../background/parallax-clouds/Clouds-4/4.png';
import { useTimeManager } from '../../../store/contexts/TimeManagerContext';
import FirefliesAnimation from './Fireflies';
import { CloudConfig } from '../../background/parallax-clouds/ParallaxScene';

// lazy load starfield component
const StarField = React.lazy(() => import('./StarField'));

interface AnimationBoxProps {
  time?: number | undefined;
  children: ReactNode;
}

interface AnimatedBackgroundProps {
  time?: number | undefined;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ time }) => {
  const theme = useTheme();

  /* eslint-disable */
  const renderThemeAnimations = () => {
    switch (theme.themeName) {
      case 'morningTheme':
        return <MorningThemeAnimations />;
      case 'dayTheme':
        return <DayThemeAnimations />;
      case 'afternoonTheme':
        return <AfternoonThemeAnimations />;
      case 'nightTheme':
        return <NightThemeAnimations />;
      default:
        return null;
    }
  };
  /* eslint-enable */

  return <AnimationBox time={time}>{renderThemeAnimations()}</AnimationBox>;
};

const AnimationBox: React.FC<AnimationBoxProps> = ({ children }) => {
  const { gradientColor, sceneKey, hour, minute, astralBody, timeDate } =
    useTimeManager();

  return (
    <Box
      pos="absolute"
      zIndex="0"
      overflow="hidden"
      w="100%"
      h="100%"
      bgGradient={gradientColor}
    >
      <MoonAndSunAnimation
        astralbody={astralBody}
        overNight={astralBody === 'moon' ? true : false}
        startTime={astralBody === 'moon' ? MOON_START_TIME : SUN_START_TIME} // Start time (05:00)
        peakTime={astralBody === 'moon' ? MOON_PEAK_TIME : SUN_PEAK_TIME} // Peak time (14:00)
        endTime={astralBody === 'moon' ? MOON_END_TIME : SUN_END_TIME} // End time (18:00)
        currentTime={timeDate} // Pass current time to MoonAnimation
      />
      {children}
    </Box>
  );
};

const cloudsConfig: CloudConfig[] = [
  {
    image: 'twilight-5.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.02,
    alphaRange: [0.3, 0.8],
    // scale: 1.5,
  },
  {
    image: 'twilight-2.png',
    position: { x: 0, y: 65 },
    scrollSpeed: 0.02,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
  {
    image: 'twilight-3.png',
    position: { x: 0, y: 65 },
    scrollSpeed: 0.04,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },

  {
    image: 'twilight-4.png',
    position: { x: 0, y: 15 },
    scrollSpeed: 0.02,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
];
// {
//   image: 'twilight-2.png',
//   position: { x: 0, y: 290 },
//   scrollSpeed: 0.07,
//   alphaRange: [0.5, 1], // Correct tuple format
// },
// {
//   image: 'twilight-3.png',
//   position: { x: 0, y: 290 },
//   scrollSpeed: 0.1,
//   alphaRange: [0.3, 0.8], // Correct tuple format
// },
// {
//   image: 'twilight-4.png',
//   position: { x: 0, y: 70 },
//   scrollSpeed: 0.1,
//   alphaRange: [0.3, 0.8], // Correct tuple format
// },

// Add more cloud configurations if needed

export default AnimatedBackground;

const MorningThemeAnimations = () => {
  return <div>Morning Theme Animations</div>;
};

const DayThemeAnimations = () => {
  return (
    <div>
      {' '}
      <ParallaxClouds cloudsConfig={cloudsConfig} />
    </div>
  );
};

const AfternoonThemeAnimations = () => {
  return (
    <>
      <div>hello</div>
      <ParallaxClouds cloudsConfig={cloudsConfig} />
    </>
  );
};

const NightThemeAnimations = React.memo(() => {
  const MemoizedStarfield = React.memo(StarField);
  const MemoizedUFOComponent = React.memo(UFOComponent);
  const MemoizedNyanCat = React.memo(NyanCatAnimation);
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MemoizedStarfield />
        <FirefliesAnimation />
        <ParallaxClouds cloudsConfig={cloudsConfig} />
      </React.Suspense>
      {/* <MemoizedUFOComponent />
      <MemoizedNyanCat /> */}
      {/* <FirefliesAnimation /> */}
    </>
  );
});

NightThemeAnimations.displayName = 'NightThemeAnimations';
