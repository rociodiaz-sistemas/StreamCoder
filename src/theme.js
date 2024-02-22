import { extendTheme } from '@chakra-ui/react';

// Define your custom themes
export const themes = {
    rainforest: {
        name: 'Rainforest',
        dataTheme: 'rainforest',
        color: '#00755e',
    },
    candy: {
        name: 'Candy',
        dataTheme: 'candy',
        color: '#ffb7d5',
    },
    rose: {
        name: 'Rose',
        dataTheme: 'rose',
        color: '#ff007f',
    },
};

// Set a default theme
export const defaultTheme = themes.candy;

// Create a Chakra UI theme based on the default theme
const theme = extendTheme({
    colors: {
        brand: {
            50: '#f3f4f6',
            100: '#e6e8ec',
            200: '#c0c6d1',
            300: '#9ba6b7',
            400: '#505f86',
            500: '#051455',
            600: '#041243',
            700: '#030e32',
            800: '#020b22',
            900: '#010611',
        },
        rose: {
            name: 'Rose',
            dataTheme: 'rose',
            color: '#ff007f',
        },
        rainforest: {
            name: 'Rainforest',
            dataTheme: 'rainforest',
            color: '#00755e',
        },
        candy: {
            name: 'Candy',
            dataTheme: 'candy',
            color: '#ffb7d5',
        },
    },
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Roboto', sans-serif",
    },
});

export default theme;
