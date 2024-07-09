import baseTheme from './baseTheme';
import { gifs } from '../assets/assets';

export default {
  ...baseTheme,
  themeName: 'dayTheme',
  components: {
    Chat: {
      baseStyle: {
        bg: 'gradients.DaySky',
      },
    },
    Header: {
      baseStyle: {
        backgroundColor: 'nightWhite',
        color: 'blueDay',
      },
    },
  },
  messageStyles: {
    // Define message box styles based on user type
    subscriber: {
      borderColor: 'blueDay',
      background: 'grisPalidoDaySub',
      backgroundGradient: undefined,
      gifBackground: gifs.general.subscriberGif,
    },
    bit: {
      borderColor: 'blueDay',
      background: 'amarilloPalidoDay',
      backgroundGradient: undefined,
      gifBackground: gifs.general.bitGif,
    },
    highlighted: {
      borderColor: 'nightWhite',
      background: 'nightWhite',
      backgroundGradient: undefined,
      gifBackground: undefined,
      fontColor: 'red',
      highlightedColor: 'pink',
    },
    vip: {
      borderColor: 'blueDay',
      background: 'grisPalidoDay',
      backgroundGradient: undefined,
      gifBackground: undefined,
    },
    common: {
      borderColor: 'blueDay',
      background: 'grisPalidoDay',
      backgroundGradient: undefined,
      gifBackground: undefined,
    },
  },
  gradients: {
    DaySky:
      'linear-gradient(180deg, #FFC926 0%, #FCE293 26%, #EBDDB5 44%, #A9BEDB 83.9%)',
  },
};
