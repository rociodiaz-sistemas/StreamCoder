import Chat from '../components/Chat';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default {
  title: 'Chat',
  component: Chat,
};

const Template = (args: any) => <Chat {...args} />;

export const Default = Template.bind({});

export const WithThemeSwitcher = () => (
  <>
    <ThemeSwitcher />
    <Chat />
  </>
);
