// template react typescript component
import React from 'react';
import { useTimeManager } from '../../../store/contexts/TimeManagerContext';
import ParallaxClouds from '../parallax-clouds/ParallaxClouds';
import PixelArtGrid from './pixelDemo';
import TaskBar from '../../operating-system/task-bar/TaskBar';
import { Email } from '../../operating-system/task-bar/email/Email';
import Unread from '../../operating-system/task-bar/email/Unread';

interface Props {}

const Component: React.FC<Props> = () => {
  const { gradientColor } = useTimeManager();
  return (
    <div style={{ paddingLeft: '60px' }}>
      Test
      <Unread />
    </div>
  );
};

export default Component;
