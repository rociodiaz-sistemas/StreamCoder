import React from 'react';
import { Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import useDynamicGradientColor from '../hooks/useDynamicGradient'; // Adjust the path as necessary
import TimeSlider from './tools/TimeSlider'; // Adjust the path as necessary

// Meta information for the story
const meta: Meta = {
  title: 'Hooks/useDynamicGradientColor with TimeSlider',
  argTypes: {
    initialTime: { control: 'object' }, // Define initialTime in argTypes for Storybook controls
  },
};

export default meta;

// Story definition
export const DynamicGradientColorStory = ({ initialTime }: { initialTime: { hours: number; minutes: number } }) => {
  // State to manage time for useDynamicGradientColor
  const [selectedTime, setSelectedTime] = React.useState(initialTime || { hours: 0, minutes: 0 });

  // Get dynamic gradient color based on time
  const gradientColor = useDynamicGradientColor(selectedTime.hours, selectedTime.minutes);

  // Handle time change from TimeSlider
  const handleTimeChange = (time: { hours: number; minutes: number }) => {
    setSelectedTime(time);
  };

  return (
    <div style={{ padding: '20px' }}>
      <TimeSlider
        startTime={initialTime}
        onChange={handleTimeChange}
        minTime={{ hours: 0, minutes: 0 }}
        maxTime={{ hours: 23, minutes: 59 }}
      />
      <Box
        overflow="hidden"
        w="300px"
        h="400px"
        bgGradient={gradientColor}
      >
        {gradientColor}
      </Box>
    </div>
  );
};
