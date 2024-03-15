import baseTheme from './baseTheme'
import { gifs } from '../assets/assets'

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
    messageStyles: {
        // Define message box styles based on user type
        subscriber: {
            borderColor: '#a0c',
            background: '#0ca',
            gifBackground: '',
        },
        bit: {
            borderColor: '#aaa',
            background: '#de0',
            gifBackground: gifs.general.bitGif,
        },
        highlighted: {
            borderColor: '#0de',
            background: '#eda',
            gifBackground: '',
        },
        vip: {
            borderColor: '#afa',
            background: '#ebe',
            gifBackground: '',
        },
        common: {
            borderColor: '#0de',
            background: '#dca',
            gifBackground: '',
        },
    },
    gradients: {
        MorningSky:
            'linear-gradient(180deg, #A9ABDB 5%, #A9BEDB 27.5%, #FCE293 66.5%, #F5F5F5 90%)',
    },
}
