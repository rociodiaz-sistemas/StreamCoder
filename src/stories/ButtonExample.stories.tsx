import ButtonExample from '../components/ButtonExample';

export default {
  title: 'Components/ButtonExample',
  component: ButtonExample,
  parameters: {
    dataTheme: 'rainforest', // Set the default theme for stories
  },
};

export const Normal = (args: any) => <ButtonExample {...args} />;
Normal.args = {
  // You can set the theme for the individual story
  dataTheme: 'rainforest',
};
