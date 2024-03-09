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
        },
        bit: {
            borderColor: 'rosaBarbie',
            background: 'nightWhite',
        },
        highlighted: {
            borderColor: 'nightWhite',
            background: 'cuteCosmico',
        },
        vip: {
            borderColor: 'rosaBarbie',
            background: 'nightWhite',
        },
        common: {
            borderColor: 'rosaBarbie',
            background: 'rositaBb',
        },
    },
    gradients: {
        NightSky:
            'linear-gradient(180deg, #141311 0%, #2D2E38 45.5%, #333850 60%, #553A77 100%)',
    },
}
