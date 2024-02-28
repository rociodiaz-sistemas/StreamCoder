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
            'linear-gradient(180deg, #64509F 2.5%, #CEA9DB 32%, #EBDDB5 100%)',
    },
}
