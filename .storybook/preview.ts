import type { Preview } from '@storybook/react'
import theme from '../src/theme'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ChakraProvider } from '@chakra-ui/react'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        chakra: {
            theme,
        },
        decorators: [
            withThemeFromJSXProvider({
                themes: {
                    default: theme,
                },
                defaultTheme: 'light',
                Provider: ChakraProvider,
                GlobalStyles: theme.colors,
            }),
        ],
    },
}

export default preview
