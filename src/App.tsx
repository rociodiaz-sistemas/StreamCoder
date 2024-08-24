import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { connectWebSocket } from './store/actions/websocketActions';
import morningTheme from './themes/morningTheme';
import { ChatContextProvider } from './store/contexts/ChatContext';
import ResizableChat from './components/chat-widget/ResizableChat';
import dayTheme from './themes/dayTheme';
import afternoonTheme from './themes/afternoonTheme';
import theme from './themes/theme';
import { timeRanges } from './utils/helpers';
import { ThemeType } from './utils/models';
import { Routes, Route } from 'react-router-dom';
import ResizableMessagesChat from './components/only-messages/ResizableOnlyMessagesChat';
import BackgroundOverlay from './components/background/BackgroundOverlay';
import TopBackgroundOverlay from './components/top-background/TopBackgroundOverlay';
import CloudParallax from './components/background/parallax-clouds/ParallaxClouds';

function App() {
  const dispatch = useDispatch();
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(morningTheme);
  const isWebSocketConnected = useRef(false); // useRef to track connection status

  useEffect(() => {
    const determineTheme = () => {
      const currentHour = new Date().getHours();

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
            default:
              setSelectedTheme(theme);
              break;
          }
          break;
        }
      }
    };

    determineTheme();
    const intervalId = setInterval(determineTheme, 3600000);

    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (!isWebSocketConnected.current) {
      dispatch(connectWebSocket());
      isWebSocketConnected.current = true; // Update the ref to indicate connection has been established
    }
  }, [dispatch]);

  return (
    <ChakraProvider theme={selectedTheme}>
      <main>
        <ChatContextProvider theme={selectedTheme}>
          <Routes>
            <Route path="/" element={<ResizableChat />} />
            <Route path="/OnlyMessages" element={<ResizableMessagesChat />} />
            <Route path="/BackgroundOverlay" element={<BackgroundOverlay />} />
            <Route
              path="/TopBackgroundOverlay"
              element={<TopBackgroundOverlay />}
            />
            <Route path="/Test" element={<CloudParallax />} />
            {/* Add more routes as needed */}
          </Routes>
        </ChatContextProvider>
      </main>
    </ChakraProvider>
  );
}

export default App;
