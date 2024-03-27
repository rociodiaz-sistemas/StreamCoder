import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

addons.setConfig({
    theme: create({
        base: 'dark',

        // Brand
        brandTitle: 'La Tecnología del futuro para el Streaming del hoy',
        brandUrl: '#',
        brandImage: '/logo.png',
        brandTarget: '_self',

        //
        colorPrimary: '#c586c0',
        colorSecondary: '#c586c0',

        // UI
        appBg: '#080404',
        appBorderColor: '#c586c0',
        appBorderRadius: 10,

        // Text colors
        textColor: '#ffffff',
        textInverseColor: '#e4bcdc', // ?? I don't know what does it do

        // Toolbar default and active colors
        barBg: '#080404',
        barTextColor: '#c586c0',
        barSelectedColor: '#ffffff',
        barHoverColor: '#ffffff',

        // Form colors
        inputBorderRadius: 10,
    }),
})
