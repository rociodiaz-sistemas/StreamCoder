import React from 'react';
import { Decorator } from '@storybook/react';

const withAbsoluteWrapper: Decorator = (Story, context) => (
  <div style={{
    position: 'relative', width: 500, height: 400, overflow: 'hidden', backgroundColor: 'black',
  }}>
    <Story {...context} />
  </div>
);

export default withAbsoluteWrapper;