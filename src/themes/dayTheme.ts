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
  },
  messageStyles: {
    // Define message box styles based on user type
    subscriber: {
      borderColor: 'blueDay',
      background: 'grisPalidoDaySub',
      backgroundGradient: '',
      gifBackground: gifs.general.subscriberGif,
    },
    bit: {
      borderColor: 'blueDay',
      background: 'amarilloPalidoDay',
      backgroundGradient: '',
      gifBackground: gifs.general.bitGif,
    },
    highlighted: {
      borderColor: 'nightWhite',
      background: 'nightWhite',
      backgroundGradient: '',
      gifBackground: '',
    },
    vip: {
      borderColor: 'blueDay',
      background: 'grisPalidoDay',
      backgroundGradient: '',
      gifBackground: '',
    },
    common: {
      borderColor: 'blueDay',
      background: 'grisPalidoDay',
      backgroundGradient: '',
      gifBackground: '',
    },
  },
  gradients: {
    DaySky:
      'linear-gradient(180deg, #FFC926 0%, #FCE293 26%, #EBDDB5 44%, #A9BEDB 83.9%)',
  },
};
