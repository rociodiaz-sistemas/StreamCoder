import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

addons.setConfig({
    theme: create({
        base: 'dark',
        brandTitle:
            'Revolutionizing Streaming with Innovative Software Solutions',
        brandUrl: 'https://www.linkedin.com/company/streamcoder/',
        brandImage: '/logo.jpg',
        colorPrimary: '#baf5b4',
        colorSecondary: '#c586bf',
        appBg: '#2e2c31',
        // appBorderColor: '#ccc',
        // appBorderRadius: 0,
        textColor: '#ffffff',
        // barTextColor: '#666',
        brandTarget: '_self',
    }),
})
