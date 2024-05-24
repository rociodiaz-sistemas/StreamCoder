import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { connectWebSocket } from './store/actions/websocketActions';
import Chat from './components/Chat';
import morningTheme from './themes/morningTheme';
import { useSelector } from 'react-redux';
import { RootState } from './store';

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
        <Chat />
      </main>
    </ChakraProvider>
  );
}

export default App;
