import { Box, useTheme } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import useDynamicGradientColor from '../../../hooks/useDynamicGradient';
import UFOComponent from './UFO';
import MoonAndSunAnimation from './MoonAndSun';

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

const AnimationBox: React.FC<AnimationBoxProps> = ({ children, time }) => {
  const currentGradient = useDynamicGradientColor(time);
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
        astralbody='sun'
        overNight={false}
        startTime={{ hours: 5, minutes: 0 }} // Start time (05:00)
        peakTime={{ hours: 14, minutes: 0 }} // Peak time (14:00)
        endTime={{ hours: 18, minutes: 0 }} // End time (18:00)
        currentTime={{ hours: 13, minutes: 0 }} // Pass current time to MoonAnimation
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
