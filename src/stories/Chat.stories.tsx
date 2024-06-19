import { Meta, StoryObj } from '@storybook/react';
import { ChatProps } from '../components/chat-widget/Chat';
import Chat from '../components/chat-widget/Chat';
import withTimeSlider from '../../.storybook/decorators/withTimeSlider';

const meta: Meta<ChatProps> = {
  title: 'Widgets/Chat',
  component: Chat,
  tags: ['autodocs'],
  decorators: [withTimeSlider],
};

export default meta;

// type Story = (args: ChatProps) => JSX.Element;
type Story = StoryObj<typeof Chat>;

export const Normal: Story = {
  args: {
    height: 7,
    defaultHeight: 800,
    width: 800,
    defaultWidth: 800,
    time: 19,
  },
};
