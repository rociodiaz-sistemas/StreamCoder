import { Box, useTheme } from '@chakra-ui/react';
import React, { ReactNode, Suspense, useEffect, useState } from 'react';
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
import { useTimeManager } from '../../../store/contexts/TimeManagerContext';
import FirefliesAnimation from './Fireflies';

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
  const { gradientColor, cloudConfig, hour, minute, astralBody, timeDate } =
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
      {cloudConfig && <ParallaxClouds cloudsConfig={cloudConfig} />}
    </Box>
  );
};

export default AnimatedBackground;

const MorningThemeAnimations = () => {
  return <div>MorningThemeAnimations</div>;
};

const DayThemeAnimations = () => {
  return (
    <div>
      <div>DayThemeAnimations</div>
    </div>
  );
};

const AfternoonThemeAnimations = () => {
  return (
    <>
      <div>AfternoonThemeAnimations</div>
      <FirefliesAnimation />
    </>
  );
};

const NightThemeAnimations = React.memo(() => {
  const MemoizedStarfield = React.memo(StarField);
  // const MemoizedUFOComponent = React.memo(UFOComponent);
  // const MemoizedNyanCat = React.memo(NyanCatAnimation);
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MemoizedStarfield />
        <FirefliesAnimation />
        {/* <ParallaxClouds cloudsConfig={cloudsConfig} /> */}
      </React.Suspense>
      {/* <MemoizedUFOComponent />
      <MemoizedNyanCat /> */}
    </>
  );
});

// NightThemeAnimations.displayName = 'NightThemeAnimations';
