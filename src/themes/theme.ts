import baseTheme from './baseTheme'

export default {
    ...baseTheme,
    themeName: 'nightTheme',
    components: {
        Chat: {
            baseStyle: {
                bg: 'gradients.NightSky',
            },
        },
    },
    messageStyles: {
        // Define message box styles based on user type
        subscriber: {
            borderColor: 'rosaBarbie',
            background: 'nightWhite',
            gifBackground: '',
        },
        bit: {
            borderColor: 'rosaBarbie',
            background: 'nightWhite',
            gifBackground: '',
        },
        highlighted: {
            borderColor: 'nightWhite',
            background: 'cuteCosmico',
            gifBackground: '',
        },
        vip: {
            borderColor: 'rosaBarbie',
            background: 'nightWhite',
            gifBackground: 'bitGif',
        },
        common: {
            borderColor: 'rosaBarbie',
            background: 'rositaBb',
            gifBackground: 'bitGif',
        },
    },
    gradients: {
        NightSky:
            'linear-gradient(180deg, #141311 0%, #2D2E38 45.5%, #333850 60%, #553A77 100%)',
    },
}
