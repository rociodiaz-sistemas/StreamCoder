import React from "react";
import { Decorator } from '@storybook/react';
import { TimeManagerProvider } from '../../src/store/contexts/TimeManagerContext'; // Adjust the import path if necessary

const withTimeManagerProvider: Decorator = (Story: React.FC) => (
  <TimeManagerProvider>
    <Story />
  </TimeManagerProvider>
);

export default withTimeManagerProvider;
