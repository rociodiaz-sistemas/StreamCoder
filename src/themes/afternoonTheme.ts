import baseTheme from './baseTheme'

export default {
    ...baseTheme,
    themeName: 'afternoonTheme',
    components: {
        Chat: {
            baseStyle: {
                bg: 'gradients.AfternoonSky',
            },
        },
    },
    messageStyles: {
        // Define message box styles based on user type
        subscriber: {
            borderColor: 'lila',
            background: 'rosaPalido',
        },
        bit: {
            borderColor: 'lila',
            background: 'rosaPalido',
        },
        highlighted: {
            borderColor: 'nightWhite',
            background: 'nightSkyAfternoon',
        },
        vip: {
            borderColor: 'lila',
            background: 'rosaPalido',
        },
        common: {
            borderColor: 'RosaBarbie',
            background: 'rositaBb',
        },
    },
    gradients: {
        AfternoonSky:
            'linear-gradient(180deg, #64509F 2.5%, #CEA9DB 32%, #EBDDB5 100%)',
    },
}
