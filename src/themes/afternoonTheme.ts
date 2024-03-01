import baseTheme from './baseTheme'

export default {
    ...baseTheme,
    themeName: 'afternoonTheme',
    colors: {
        primary: 'green',
        secondary: 'yellow',
    },
    components: {
        Chat: {
            baseStyle: {
                bg: 'gradients.AfternoonSky',
            },
        },
    },
    gradients: {
        AfternoonSky:
            'linear-gradient(180deg, #64509F 2.5%, #CEA9DB 32%, #EBDDB5 100%)',
    },
}
