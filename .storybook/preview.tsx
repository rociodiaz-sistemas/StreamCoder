import React from 'react'
import { Preview } from '@storybook/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import morningTheme from '../src/themes/morningTheme'
import theme from '../src/themes/theme'
import dayTheme from '../src/themes/dayTheme'
import afternoonTheme from '../src/themes/afternoonTheme'

// IMPORTANT: If you change the baseTheme.ts file, you need to reload the page.

type ThemeType = 'default' | 'morning' | 'day' | 'afternoon'

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
                title: 'default', // Label for the toolbar item
                icon: 'heart', // Icon for the toolbar item
                items: ['default', 'morning', 'day', 'afternoon'], // Available theme options
                dynamicTitle: true, // Update title based on selected value
            },
        },
    },
    decorators: [
        (Story, context) => {
            // Get the selected theme from the context
            const selectedTheme = context.globals.theme as ThemeType

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
                    <Story {...context} />
                </ChakraProvider>
            )
        },
    ],
}

export default preview
