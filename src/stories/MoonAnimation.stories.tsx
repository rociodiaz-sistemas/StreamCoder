import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import MoonAnimation from '../components/chat-widget/chat-animations/MoonAndSun';
import TimeSlider from './tools/TimeSlider';

// Meta information for the story
const meta: Meta = {
  title: 'Components/Moon Animation with Time Slider',
  component: MoonAnimation,
  argTypes: {
    initialTime: { control: 'object' },
  },
};

export default meta;

// Story definition
export const MoonAnimationWithTimeSlider = ({ initialTime }: { initialTime: { hours: number; minutes: number } }) => {
  const [selectedTime, setSelectedTime] = useState(initialTime || { hours: 18, minutes: 0 });

  const handleTimeChange = (time: { hours: number; minutes: number }) => {
    setSelectedTime(time);
  };

  return (
    <>
      <TimeSlider
        startTime={initialTime}
        onChange={handleTimeChange}
        overNight={true}
        minTime={{ hours: 18, minutes: 0 }}
        maxTime={{ hours: 5, minutes: 0 }}
      />
      <div style={{
        position: 'relative', width: 500, height: 400, overflow: 'hidden', backgroundColor: 'black',
      }}>
        <MoonAnimation
          overNight={true}
          startTime={{ hours: 18, minutes: 0 }} // Start time (18:00)
          peakTime={{ hours: 23, minutes: 0 }} // Peak time (23:00)
          endTime={{ hours: 5, minutes: 0 }} // End time (05:00)
          currentTime={selectedTime} // Pass current time to MoonAnimation
        />
      </div>
    </>
  );
};

// Default props for the story
MoonAnimationWithTimeSlider.args = {
  initialTime: { hours: 12, minutes: 0 }, // Default initial time (noon)
};
