import { useCallback, useEffect, useState } from 'react';
import { MessageModel } from '../utils/models';
import useChatConnection from './useChatConnection';

const MESSAGE_WINDOW = 30;

const welcomeMessage: MessageModel = {
  id: 'welcome-message',
  author: {
    id: '1',
    rgbColor: 'darkorchid',
    badges: ['moderator'],
    username: 'AntoniaVaquita',
    type: 'common',
  },
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
};

export default function useChatMessages() {
  const [messages, setMessages] = useState<MessageModel[]>([welcomeMessage]);

  const socket = useChatConnection();

  const appendNewMessage = useCallback(
    (newMessage: MessageModel) => {
      const nextMessages: MessageModel[] = [
        ...messages.slice(-MESSAGE_WINDOW),
        newMessage,
      ];
      setMessages(nextMessages);
    },
    [messages],
  );

  const send = useCallback(
    (message: string) => {
      console.log(`Sending message: ${message}`);
      socket?.emit('message', message);
    },
    [socket],
  );

  useEffect(() => {
    socket?.on('new-message', (msg: MessageModel) => {
      appendNewMessage(msg);
    });

    return () => {
      socket?.off('new-message');
    };
  }, [appendNewMessage, socket]);

  return {
    messages,
    send,
  };
}
