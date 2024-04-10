import baseTheme from './baseTheme';
import { gifs, gradients } from '../assets/assets';

export default {
  ...baseTheme,
  themeName: 'morningTheme',
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
      borderColor: 'amarilloMorning',
      background: 'grisMorningSub',
      backgroundGradient: '',
      gifBackground: gifs.general.subscriberGif,
    },
    bit: {
      borderColor: 'amarilloMorningBit',
      background: 'grisPalidoMorningBit',
      backgroundGradient: '',
      gifBackground: gifs.general.bitGif,
    },
    highlighted: {
      borderColor: 'azulMorado',
      background: '',
      backgroundGradient: gradients.morningTheme.blueHighlighted,
      gifBackground: '',
    },
    vip: {
      borderColor: 'amarilloMorning',
      background: 'grisPalidoMorning',
      backgroundGradient: '',
      gifBackground: '',
    },
    common: {
      borderColor: 'amarilloMorning',
      background: 'grisPalidoMorning',
      backgroundGradient: '',
      gifBackground: '',
    },
  },
  gradients: {
    MorningSky:
      'linear-gradient(180deg, #A9ABDB 5%, #A9BEDB 27.5%, #FCE293 66.5%, #F5F5F5 90%)',
  },
};
