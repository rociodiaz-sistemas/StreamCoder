// preview.ts

import React from 'react'
import { Preview } from '@storybook/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import morningTheme from '../src/themes/morningTheme'
import theme from '../src/themes/theme'

// IMPORTANT: If you change the baseTheme.ts file, you need to reload the page.

const preview: Preview = {
    parameters: {
        chakra: {
            theme,
            morningTheme,
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'default', // Set the default theme option
            toolbar: {
                title: 'default', // Label for the toolbar item
                icon: 'heart', // Icon for the toolbar item
                items: ['default', 'morning'], // Available theme options
                dynamicTitle: true, // Update title based on selected value
            },
        },
    },
    decorators: [
        (Story, context) => {
            // Get the selected theme from the context
            const selectedTheme = context.globals.theme

            // Update the Chakra UI theme based on the selected theme
            const updatedTheme =
                selectedTheme === 'morning'
                    ? extendTheme(morningTheme)
                    : extendTheme(theme)

            return (
                <ChakraProvider theme={updatedTheme}>
                    <Story {...context} />
                </ChakraProvider>
            )
        },
    ],
}

export default preview
