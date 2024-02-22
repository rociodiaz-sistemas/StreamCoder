import type { Preview } from '@storybook/react'
import theme from '../src/theme'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ChakraProvider } from '@chakra-ui/react'
import { themes } from '@storybook/theming'
import type { ThemeConfig } from 'storybook-addon-data-theme-switcher'

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
                defaultTheme: 'dark',
                Provider: ChakraProvider,
                GlobalStyles: theme.colors,
            }),
        ],
        docs: {
            theme: themes.light,
        },
    },
}

export const globalTypes = {
    dataTheme: {
        defaultValue: "candy",
    },
    dataThemes: {
        defaultValue: {
            list: [
                { name: "Rainforest", dataTheme: "rainforest", color: "#00755e" },
                { name: "Candy", dataTheme: "candy", color: "#ffb7d5" },
                { name: "Rose", dataTheme: "rose", color: "#ff007f" },
            ],
            dataAttribute: "data-theme", // optional (default: "data-theme")
            clearable: true,             // optional (default: true)
        }
    },
};

export default preview
