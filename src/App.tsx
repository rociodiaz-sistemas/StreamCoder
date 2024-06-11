import { ChakraProvider, Slider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { connectWebSocket } from './store/actions/websocketActions';
import morningTheme from './themes/morningTheme';
import { ChatContextProvider } from './store/contexts/ChatContext';
import ResizableChat from './components/chat-widget/ResizableChat';
import dayTheme from './themes/dayTheme';
import afternoonTheme from './themes/afternoonTheme';
import theme from './themes/theme';
import { timeRanges } from './utils/helpers';
import { ThemeType } from './utils/models';

function App() {
  const dispatch = useDispatch();
  let isWebSocketConnected = false;
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(morningTheme);

  useEffect(() => {
    // Function to determine the theme based on the current hour
    const determineTheme = () => {
      const currentHour = new Date().getHours(); // Get the current hour

      // Determine which theme to use based on the current hour
      for (const [themeName, { start, end }] of Object.entries(timeRanges)) {
        if (currentHour >= start && currentHour < end) {
          switch (themeName) {
            case 'MorningSky':
              setSelectedTheme(morningTheme);
              break;
            case 'DaySky':
              setSelectedTheme(dayTheme);
              break;
            case 'AfternoonSky':
              setSelectedTheme(afternoonTheme);
              break;
            // Add other themes here as needed
            default:
              setSelectedTheme(theme);
              break;
          }
          break; // Exit loop once the theme is determined
        }
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
        <ChatContextProvider theme={selectedTheme}>
          <ResizableChat />
        </ChatContextProvider>
      </main>
    </ChakraProvider>
  );
}

export default App;
