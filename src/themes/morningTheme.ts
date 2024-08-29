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
    Header: {
      baseStyle: {
        backgroundColor: 'amarillo',
        color: 'lila',
      },
    },
  },
  messageStyles: {
    // Define message box styles based on user type
    subscriber: {
      borderColor: 'amarilloMorning',
      background: 'grisMorningSub',
      backgroundGradient: undefined,
      gifBackground: gifs.general.subscriberGif,
    },
    bit: {
      borderColor: 'amarilloMorningBit',
      background: 'grisPalidoMorningBit',
      backgroundGradient: undefined,
      gifBackground: gifs.general.bitGif,
    },
    highlighted: {
      borderColor: 'azulMorado',
      background: undefined,
      backgroundGradient: gradients.morningTheme.blueHighlighted,
      gifBackground: undefined,
      fontColor: '#0E3BB9', // blueDay
      highlightedColor: '#FCE293', // amarillo
    },
    vip: {
      borderColor: 'amarilloMorning',
      background: 'grisPalidoMorning',
      backgroundGradient: undefined,
      gifBackground: undefined,
    },
    common: {
      borderColor: 'amarilloMorning',
      background: 'grisPalidoMorning',
      backgroundGradient: undefined,
      gifBackground: undefined,
    },
  },
  gradients: {
    MorningSky:
      'linear-gradient(180deg, #A9ABDB 5%, #A9BEDB 27.5%, #FCE293 66.5%, #F5F5F5 90%)',
  },
  operatingSystem: {
    taskbar: 'rositaBb',
  },
};
