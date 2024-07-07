import baseTheme from './baseTheme';
import { gifs, gradients } from '../assets/assets';

export default {
  ...baseTheme,
  themeName: 'afternoonTheme',
  components: {
    Chat: {
      baseStyle: {
        bgGradient: 'gradients.AfternoonSky',
      },
    },
    Header: {
      baseStyle: {
        backgroundColor: 'rosa',
        color: 'brown',
      },
    },
  },
  messageStyles: {
    // Define message box styles based on user type
    subscriber: {
      borderColor: 'lila',
      background: 'rosaPalido',
      backgroundGradient: undefined,
      gifBackground: gifs.general.subscriberGif,
    },
    bits: {
      borderColor: 'lila',
      background: 'rosaPalido',
      backgroundGradient: undefined,
      // gifBackground: gifs.general.bitGif,
    },
    highlighted: {
      color: 'nightWhite',
      borderColor: 'nightWhite',
      background: undefined,
      backgroundGradient: gradients.afternoonTheme.nightSkyAfternoon,
      gifBackground: undefined,
    },
    vip: {
      borderColor: 'lila',
      background: 'rosaPalido',
      backgroundGradient: undefined,
      gifBackground: undefined,
    },
    common: {
      borderColor: 'nightWhite',
      background: 'rosaPalido',
      backgroundGradient: undefined,
      gifBackground: undefined,
    },
  },
  gradients: {
    AfternoonSky:
      'linear-gradient(180deg, #64509F 2.5%, #CEA9DB 32%, #EBDDB5 100%)',
  },
};
