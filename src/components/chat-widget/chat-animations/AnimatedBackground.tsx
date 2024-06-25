import { Box, useTheme } from '@chakra-ui/react';
import React, { ReactNode, useEffect, useState } from 'react';
import useDynamicGradientColor from '../../../hooks/useDynamicGradient';
import UFOComponent from './UFO';
import MoonAndSunAnimation from './MoonAndSun';
import { MOON_END_TIME, MOON_PEAK_TIME, MOON_START_TIME, SUN_END_TIME, SUN_PEAK_TIME, SUN_START_TIME, getAstralBody } from '../../../utils/helpers';

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
  const currentGradient = useDynamicGradientColor();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [astralbody, setAstralBody] = useState<'moon' | 'sun'>(getAstralBody(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setAstralBody(getAstralBody(now));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      pos="absolute"
      zIndex="0"
      overflow="hidden"
      w="100%"
      h="100%"
      bgGradient={currentGradient}
    >
      <MoonAndSunAnimation
        astralbody={astralbody}
        overNight={astralbody === 'moon' ? true : false}
        startTime={astralbody === 'moon' ? MOON_START_TIME : SUN_START_TIME} // Start time (05:00)
        peakTime={astralbody === 'moon' ? MOON_PEAK_TIME : SUN_PEAK_TIME} // Peak time (14:00)
        endTime={astralbody === 'moon' ? MOON_END_TIME : SUN_END_TIME} // End time (18:00)
        currentTime={currentTime} // Pass current time to MoonAnimation
      />
      {children}
    </Box>
  );
};

export default AnimatedBackground;

const MorningThemeAnimations = () => {
  return <div>Morning Theme Animations</div>;
};

const DayThemeAnimations = () => {
  return <div>Day Theme Animations</div>;
};

const AfternoonThemeAnimations = () => {
  return <div>Afternoon Theme Animations</div>;
};


const NightThemeAnimations = React.memo(() => {
  const MemoizedStarfield = React.memo(StarField);
  const MemoizedUFOComponent = React.memo(UFOComponent);
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MemoizedStarfield />
      </React.Suspense>
      <MemoizedUFOComponent />
    </>
  );
});

NightThemeAnimations.displayName = 'NightThemeAnimations';
