import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import TimeSlider from './tools/TimeSlider';
import MoonAndSunAnimation from '../components/chat-widget/chat-animations/MoonAndSun';

// Meta information for the story
const meta: Meta = {
  title: 'Animations/Moon and Sun',
  component: MoonAndSunAnimation,
  argTypes: {
    initialTime: { control: 'object' },
  },
};

export default meta;

// Story definition for Moon Animation
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
        <MoonAndSunAnimation
          astralbody='moon'
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

// Default props for MoonAnimation
MoonAnimationWithTimeSlider.args = {
  initialTime: { hours: 18, minutes: 0 }, // Default initial time (18:00)
};

// Story definition for Sun Animation
export const SunAnimationWithTimeSlider = ({ initialTime }: { initialTime: { hours: number; minutes: number } }) => {
  const [selectedTime, setSelectedTime] = useState(initialTime || { hours: 5, minutes: 0 });

  const handleTimeChange = (time: { hours: number; minutes: number }) => {
    setSelectedTime(time);
  };

  return (
    <>
      <TimeSlider
        startTime={initialTime}
        onChange={handleTimeChange}
        overNight={false}
        minTime={{ hours: 5, minutes: 0 }}
        maxTime={{ hours: 18, minutes: 0 }}
      />
      <div style={{
        position: 'relative', width: 500, height: 400, overflow: 'hidden', backgroundColor: 'black',
      }}>
        <MoonAndSunAnimation
          astralbody='sun'
          overNight={false}
          startTime={{ hours: 5, minutes: 0 }} // Start time (05:00)
          peakTime={{ hours: 14, minutes: 0 }} // Peak time (14:00)
          endTime={{ hours: 18, minutes: 0 }} // End time (18:00)
          currentTime={selectedTime} // Pass current time to MoonAnimation
        />
      </div>
    </>
  );
};

// Default props for SunAnimation
SunAnimationWithTimeSlider.args = {
  initialTime: { hours: 5, minutes: 0 }, // Default initial time (05:00)
};
