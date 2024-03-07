import baseTheme from './baseTheme'

export default {
    ...baseTheme,
    themeName: 'morningTheme',
    colors: {
        primary: 'purple',
        secondary: 'pink',
    },
    components: {
        Chat: {
            baseStyle: {
                bg: 'gradients.MorningSky',
            },
        },
    },
    gradients: {
        MorningSky:
            'linear-gradient(180deg, #A9ABDB 5%, #A9BEDB 27.5%, #FCE293 66.5%, #F5F5F5 90%)',
    },
}
