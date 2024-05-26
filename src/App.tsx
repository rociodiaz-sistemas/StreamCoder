import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { connectWebSocket } from './store/actions/websocketActions';
import morningTheme from './themes/morningTheme';
import { ChatContextProvider } from './store/contexts/ChatContext';
import ResizableChat from './components/ResizableChat';

function App() {
  const dispatch = useDispatch();
  let isWebSocketConnected = false;

  useEffect(() => {
    // Check if WebSocket is not yet connected before dispatching the action
    if (!isWebSocketConnected) {
      dispatch(connectWebSocket());
      isWebSocketConnected = true; // Update the local variable to indicate connection
    }
  }, [dispatch]);

  return (
    <ChakraProvider theme={morningTheme}>
      <main>
        <ChatContextProvider>
          <ResizableChat />
        </ChatContextProvider>
      </main>
    </ChakraProvider>
  );
}

export default App;
