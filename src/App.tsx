import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { connectWebSocket } from './store/actions/websocketActions';

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
    <ChakraProvider>
      <main>
        <h1>hello</h1>
      </main>
    </ChakraProvider>
  );
}

export default App;
