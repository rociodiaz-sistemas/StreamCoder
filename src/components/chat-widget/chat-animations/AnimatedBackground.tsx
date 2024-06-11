import { Box, useTheme } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import useDynamicGradientColor from '../../../hooks/useDynamicGradient';
import UFOComponent from './UFO';
import CelestialBody from './CelestialBody';
import { timeRanges } from '../../../utils/helpers';
import SliderTest from '../../../test-components/SliderTest';

// lazy load starfield component
const StarField = React.lazy(() => import('./StarField'));

interface AnimationBoxProps {
  children: ReactNode;
}

const AnimatedBackground: React.FC = () => {
  const theme = useTheme();

  const renderThemeAnimations = () => {
    /* eslint-disable */
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
    /* eslint-enable */
  };

  return <AnimationBox>{renderThemeAnimations()}</AnimationBox>;
};

const AnimationBox: React.FC<AnimationBoxProps> = ({ children }) => {
  const currentGradient = useDynamicGradientColor();

  return (
    <Box
      pos="absolute"
      zIndex="0"
      overflow="hidden"
      w="100%"
      h="100%"
      bgGradient={currentGradient}
    >
      {/* <CelestialBody
        bodyType="sun"
        startRange={timeRanges.MidnightSky.end}
        endRange={timeRanges.EveningSky.end}
      /> */}

      <CelestialBody
        bodyType="moon"
        startRange={timeRanges.EveningSky.start}
        endRange={timeRanges.MidnightSky.end}
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

const NightThemeAnimations = () => {
  const MemoizedStarfield = React.memo(StarField);
  const MemoizedUFOComponent = React.memo(UFOComponent);
  return (
    <>
      <MemoizedStarfield />
      <MemoizedUFOComponent />
    </>
  );
};
