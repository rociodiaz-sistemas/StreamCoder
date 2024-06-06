import React from 'react';
import { Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { ChatProps } from '../components/chat-widget/Chat';
import Chat from '../components/chat-widget/Chat';
import mockStore from './store.mock';

const meta: Meta<ChatProps> = {
  title: 'Widgets/Chat',
  component: Chat,
  tags: ['autodocs'],
};

export default meta;

type Story = (args: ChatProps) => JSX.Element;

export const Normal: Story = () => {
  return (
    <Provider store={mockStore}>
      <Chat />
    </Provider>
  );
};
