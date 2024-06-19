import { useEffect, useState } from 'react';
import { Decorator } from '@storybook/react';
import TimeSlider from '../../src/components/storybook-tools/TimeSlider'; // Adjust the path as necessary

const withTimeSlider: Decorator = (Story, context) => {
  const now = new Date();
  const currentHour = now.getHours();
  const [time, setTime] = useState(currentHour);

  useEffect(() => {
    setTime(currentHour); // Set the initial time to the current hour
  }, [currentHour]);

  return (
    <>
      <TimeSlider time={time} setTime={setTime} />
      <Story {...context} args={{ ...context.args, time }} />
    </>
  );
};

export default withTimeSlider;
