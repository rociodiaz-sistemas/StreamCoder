// template react typescript component
import React from 'react';
import { useTimeManager } from '../../../store/contexts/TimeManagerContext';
import ParallaxClouds from '../parallax-clouds/ParallaxClouds';
import PixelArtGrid from './pixelDemo';

interface Props {}

const Component: React.FC<Props> = () => {
  const { gradientColor } = useTimeManager();
  return (
    <div>
      Test
      <PixelArtGrid
        borderThickness={1}
        pixelSize={10}
        gridWidth={20}
        gridHeight={20}
      />
    </div>
  );
};

export default Component;
