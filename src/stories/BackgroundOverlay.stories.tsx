import BackgroundOverlay from '../components/background/BackgroundOverlay';
import withTimeManagerProvider from '../../.storybook/decorators/withTimeManagerProvider'

export default {
  title: 'Components/BackgroundOverlay',
  component: BackgroundOverlay,
  tags: ['autodocs'],
  decorators: [withTimeManagerProvider], // Use the decorator function
};

export const Normal = {
  args: {},
};
