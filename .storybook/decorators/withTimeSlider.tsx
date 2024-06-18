// .storybook/decorators/withTimeSlider.tsx

import React, { useState } from 'react';
import { Decorator } from '@storybook/react';
import TimeSlider from '../../src/components/storybook-tools/TimeSlider'; // Adjust the path as necessary

const withTimeSlider: Decorator = (Story, context) => {
  const [time, setTime] = useState(12);

  return (
    <>
      <TimeSlider time={time} setTime={setTime} />
      <Story {...context} args={{ ...context.args, time }} />
    </>
  );
};

export default withTimeSlider;
