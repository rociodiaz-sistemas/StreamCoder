import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { connectWebSocket } from './store/actions/websocketActions';
import morningTheme from './themes/morningTheme';
import { ChatContextProvider } from './store/contexts/ChatContext';
import ResizableChat from './components/chat-widget/ResizableChat';
import dayTheme from './themes/dayTheme';
import afternoonTheme from './themes/afternoonTheme';
import theme from './themes/theme';

// Define a union type for all possible theme objects
type ThemeType = typeof morningTheme | typeof dayTheme | typeof afternoonTheme | typeof theme;


function App() {
  const dispatch = useDispatch();
  let isWebSocketConnected = false;
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(morningTheme);

  useEffect(() => {
    // Function to determine the theme based on the current hour
    const determineTheme = () => {
      const currentHour = new Date().getHours(); // Get the current hour

      // Determine which theme to use based on the current hour
      if (currentHour >= 5 && currentHour < 12) {
        setSelectedTheme(morningTheme);
      } else if (currentHour >= 12 && currentHour < 18) {
        setSelectedTheme(dayTheme);
      } else if (currentHour >= 18 && currentHour < 20) {
        setSelectedTheme(afternoonTheme);
      } else {
        setSelectedTheme(theme);
      }
    };

    determineTheme(); // Call the function initially
    const intervalId = setInterval(determineTheme, 3600000); // Update theme every hour

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    // Check if WebSocket is not yet connected before dispatching the action
    if (!isWebSocketConnected) {
      dispatch(connectWebSocket());
      isWebSocketConnected = true; // Update the local variable to indicate connection
    }
  }, [dispatch]);

  return (
    <ChakraProvider theme={selectedTheme}>
      <main>
        <ChatContextProvider>
          <ResizableChat />
        </ChatContextProvider>
      </main>
    </ChakraProvider>
  );
}

export default App;
