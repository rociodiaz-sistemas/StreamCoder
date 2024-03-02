import baseTheme from './baseTheme'

export default {
    ...baseTheme,
    themeName: 'nightTheme',
    colors: {
        primary: 'green',
        secondary: 'yellow',
    },
    components: {
        Chat: {
            baseStyle: {
                bg: 'gradients.NightSky',
            },
        },
    },
    messageStyles: {
        subscriber: {
            borderColor: 'primary',
            background: 'secondary',
        },
        bit: {
            borderColor: 'primary',
        },
        highlighted: {
            borderColor: 'primary',
        },
        VIP: {
            borderColor: 'primary',
        },
        common: {
            borderColor: 'primary',
        },
    },
    gradients: {
        NightSky:
            'linear-gradient(180deg, #141311 0%, #2D2E38 45.5%, #333850 60%, #553A77 100%)',
    },
}
