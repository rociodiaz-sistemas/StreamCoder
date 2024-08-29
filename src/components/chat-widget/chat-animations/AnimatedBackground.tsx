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
}

interface AnimatedBackgroundProps {
  time?: number | undefined;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ time }) => {
  return <AnimationBox time={time} />;
};

const AnimationBox: React.FC<AnimationBoxProps> = () => {
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
      {cloudConfig && <ParallaxClouds cloudsConfig={cloudConfig} />}
      {/* {themeName === 'nightTheme' && (
        <NightThemeAnimations cloudsConfig={cloudConfig} />
      )} */}
    </Box>
  );
};

export default AnimatedBackground;

// const MorningThemeAnimations: React.FC<{ cloudsConfig: CloudConfig[] }> = ({ cloudsConfig }) => (
//   <div>
//     <ParallaxClouds cloudsConfig={cloudsConfig} />
//   </div>
// );

// const DayThemeAnimations: React.FC<{ cloudsConfig: CloudConfig[] }> = ({ cloudsConfig }) => (
//   <div>
//     <ParallaxClouds cloudsConfig={cloudsConfig} />
//   </div>
// );

// const AfternoonThemeAnimations: React.FC<{ cloudsConfig: CloudConfig[] }> = ({ cloudsConfig }) => (
//   <>
//     <div>Hello</div>
//     <ParallaxClouds cloudsConfig={cloudsConfig} />
//   </>
// );

// const NightThemeAnimations: React.FC<{ cloudsConfig: CloudConfig[] }> = React.memo(({ cloudsConfig }) => {
//   const MemoizedStarfield = React.memo(StarField);
//   const MemoizedUFOComponent = React.memo(UFOComponent);
//   const MemoizedNyanCat = React.memo(NyanCatAnimation);
//   return (
//     <>
//       <React.Suspense fallback={<div>Loading...</div>}>
//         <MemoizedStarfield />
//         <FirefliesAnimation />
//         <ParallaxClouds cloudsConfig={cloudsConfig} />
//       </React.Suspense>
//       {/* <MemoizedUFOComponent />
//       <MemoizedNyanCat /> */}
//       {/* <FirefliesAnimation /> */}
//     </>
//   );
// });

// NightThemeAnimations.displayName = 'NightThemeAnimations';
