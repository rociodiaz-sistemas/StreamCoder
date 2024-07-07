import baseTheme from './baseTheme';
import { gifs, gradients } from '../assets/assets';

export default {
  ...baseTheme,
  themeName: 'nightTheme',
  components: {
    Chat: {
      baseStyle: {
        bg: 'gradients.NightSky',
      },
    },
    Header: {
      baseStyle: {
        backgroundColor: 'rosaBarbie',
        color: 'white',
      },
    },
  },
  messageStyles: {
    // Define message box styles based on user type

    subscriber: {
      color: 'nightWhite',
      borderColor: 'rosaBarbie',
      background: 'nightWhite',
      backgroundGradient: undefined,
      gifBackground: gifs.general.subscriberGif,
    },
    bits: {
      color: 'nightWhite',
      borderColor: 'rosaBarbie',
      background: 'rositaBb',
      backgroundGradient: undefined,
      gifBackground: undefined,
    },
    highlighted: {
      color: 'nightWhite',
      borderColor: 'nightWhite',
      background: 'cuteCosmico',
      backgroundGradient: gradients.nightTheme.cuteCosmico,
      gifBackground: undefined,
    },
    vip: {
      color: 'nightWhite',
      borderColor: 'rosaBarbie',
      background: 'nightWhite',
      backgroundGradient: undefined,
      gifBackground: undefined,
    },
    common: {
      color: 'nightWhite',
      borderColor: 'rosaBarbie',
      background: 'rositaBb',
      backgroundGradient: undefined,
      gifBackground: undefined,
    },
  },
  gradients: {
    NightSky:
      'linear-gradient(180deg, #141311 0%, #2D2E38 45.5%, #333850 60%, #553A77 100%)',
  },
};
