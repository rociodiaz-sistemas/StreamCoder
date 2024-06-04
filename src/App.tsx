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
import { MORNING_START, MORNING_END, DAY_START, DAY_END, AFTERNOON_START, AFTERNOON_END } from './utils/helpers';

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
      if (currentHour >= MORNING_START && currentHour < MORNING_END) {
        setSelectedTheme(morningTheme);
      } else if (currentHour >= DAY_START && currentHour < DAY_END) {
        setSelectedTheme(dayTheme);
      } else if (currentHour >= AFTERNOON_START && currentHour < AFTERNOON_END) {
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
    <ChakraProvider theme={theme}>
      <main>
        <ChatContextProvider>
          <ResizableChat />
        </ChatContextProvider>
      </main>
    </ChakraProvider>
  );
}

export default App;
