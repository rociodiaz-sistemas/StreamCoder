import type { StorybookConfig } from '@storybook/react-vite'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-actions',
        '@chakra-ui/storybook-addon',
        '@storybook/addon-themes',
        '@chakra-ui/storybook-addon',
        '@storybook/addon-mdx-gfm'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
}
export default config
