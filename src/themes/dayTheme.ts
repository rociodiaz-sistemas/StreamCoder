import baseTheme from './baseTheme'

export default {
    ...baseTheme,
    themeName: 'dayTheme',
    colors: {
        primary: 'yellow',
        secondary: 'purple',
    },
    components: {
        Chat: {
            baseStyle: {
                bg: 'gradients.DaySky',
            },
        },
    },
    gradients: {
        DaySky:
            'linear-gradient(180deg, #FFC926 0%, #FCE293 26%, #EBDDB5 44%, #A9BEDB 83.9%)'
    }
}
