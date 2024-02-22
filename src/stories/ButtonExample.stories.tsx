import ButtonExample from "../components/ButtonExample"

export default {
  title: 'Components/ButtonExample',
  component: ButtonExample,
  parameters: {
      dataTheme: 'candy', // Set the theme for this specific story
  },
};

export const Normal = (args: any) => <ButtonExample {...args} />;
Normal.args = {
    dataTheme: 'candy', // You can set the theme for the individual story
};