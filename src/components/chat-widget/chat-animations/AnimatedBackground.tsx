import { Box, useTheme } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import useDynamicGradientColor from '../../../hooks/useDynamicGradient';
import UFOComponent from './UFO';
import MoonAnimation from './MoonAnimation';

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
      <MoonAnimation />
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
