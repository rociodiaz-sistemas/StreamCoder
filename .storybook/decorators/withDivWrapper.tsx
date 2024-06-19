import { Decorator } from '@storybook/react';

const withDivWrapper: Decorator = (Story, context) => (
  <div style={{ width: '300px', height: '400px' }}>
    <Story {...context} />
  </div>
);

export default withDivWrapper;
