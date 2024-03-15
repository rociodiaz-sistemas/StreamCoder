import baseTheme from './baseTheme'
import { gifs } from '../assets/assets'

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
    messageStyles: {
        // Define message box styles based on user type
        subscriber: {
            borderColor: '#00ff00',
            background: '#ff00ff',
            gifBackground: '',
        },
        bit: {
            borderColor: '#0000ff',
            background: '#ff0000',
            gifBackground: gifs.general.bitGif,
        },
        highlighted: {
            borderColor: '#ffffff',
            background: '#000000',
            gifBackground: '',
        },
        vip: {
            borderColor: '#f50c',
            background: '#b00',
            gifBackground: '',
        },
        common: {
            borderColor: '#cc0',
            background: '#0cd',
            gifBackground: '',
        },
    },
    gradients: {
        DaySky: 'linear-gradient(180deg, #FFC926 0%, #FCE293 26%, #EBDDB5 44%, #A9BEDB 83.9%)',
    },
}
