import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-actions',
        // '@chakra-ui/storybook-addon', // NOT REQUIRED
        // '@storybook/addon-themes', // NOT REQUIRED
        // '@storybook/addon-mdx-gfm' // DEPRECATED
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
