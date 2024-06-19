// .storybook/preview.tsx

import React from 'react';
import { Decorator, Preview } from '@storybook/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import morningTheme from '../src/themes/morningTheme';
import theme from '../src/themes/theme';
import dayTheme from '../src/themes/dayTheme';
import afternoonTheme from '../src/themes/afternoonTheme';
import { ChatContextProvider } from '../src/store/contexts/ChatContext';
import { Provider } from 'react-redux';
import mockStore from '../src/stories/store.mock';

type ThemeType = 'default' | 'morning' | 'day' | 'afternoon';

const withThemeProvider: Decorator = (Story, context) => {
  // Get the selected theme from the context
  const selectedTheme = context.globals.theme as ThemeType;

  // Update the Chakra UI theme based on the selected theme
  let updatedTheme: any;

  switch (selectedTheme) {
    case 'morning':
      updatedTheme = extendTheme(morningTheme);
      break;
    case 'day':
      updatedTheme = extendTheme(dayTheme);
      break;
    case 'afternoon':
      updatedTheme = extendTheme(afternoonTheme);
      break;
    default:
      updatedTheme = extendTheme(theme);
      break;
  }

  return (
    <ChakraProvider theme={updatedTheme}>
      <Provider store={mockStore}>
        <ChatContextProvider theme={updatedTheme}>
          <Story {...context} />
        </ChatContextProvider>
      </Provider>
    </ChakraProvider>
  );
};

const preview: Preview = {
  parameters: {
    chakra: {
      theme,
      morningTheme,
      dayTheme,
      afternoonTheme
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'default' as ThemeType, // Set the default theme option
      toolbar: {
        title: 'Theme',
        icon: 'heart', // Icon for the toolbar item
        items: [
          { value: 'morning', right: '🌤️', title: 'Morning' },
          { value: 'day', right: '☀️', title: 'Day' },
          { value: 'afternoon', right: '🌅', title: 'Afternoon' },
          { value: 'default', right: '🌃', title: 'Night' },
        ], // Available theme options
        dynamicTitle: true, // Update title based on selected value
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
