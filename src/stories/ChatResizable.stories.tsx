import React from 'react';
import { Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { ChatContextProvider } from '../store/contexts/ChatContext';
import ResizableChat from '../components/chat-widget/ResizableChat';
import mockStore from './store.mock';
import { MessageModel } from '../utils/models';

const meta: Meta<MessageModel> = {
  title: 'Widgets/ChatResizable',
  component: ResizableChat,
  parameters: {
    layout: 'centered', // Center the component in the Canvas
  },
  tags: ['autodocs'],
};

export default meta;

type Story = (args: MessageModel) => JSX.Element;

export const Normal: Story = () => {
  return (
    <Provider store={mockStore}>
      <ChatContextProvider>
        <ResizableChat />
      </ChatContextProvider>
    </Provider>
  );
};
