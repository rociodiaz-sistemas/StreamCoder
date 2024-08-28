// template react typescript component
import React from 'react';
import { useTimeManager } from '../../../store/contexts/TimeManagerContext';
import ParallaxClouds from '../parallax-clouds/ParallaxClouds';
import PixelArtGrid from './pixelDemo';
import TaskBar from '../../task-bar/TaskBar';

interface Props {}

const Component: React.FC<Props> = () => {
  const { gradientColor } = useTimeManager();
  return (
    <div>
      Test
      <TaskBar />
    </div>
  );
};

export default Component;
