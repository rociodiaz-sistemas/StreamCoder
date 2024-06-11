import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const ENDPOINT = import.meta.env.VITE_SOCKET_ENDPOINT;

const connect = () => {
  return io(ENDPOINT, {
    reconnectionAttempts: 5,
  });
};

export default function useChatConnection() {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    /* eslint-disable */
    console.log('Connecting...');
    /* eslint-enable */
    const socket = connect();
    setSocket(socket);

    return () => {
      /* eslint-disable */
      console.log('Disconnecting...');
      /* eslint-enable */
      socket.close();
    };
  }, []);

  return socket;
}
