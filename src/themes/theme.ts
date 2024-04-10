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
  },
  messageStyles: {
    // Define message box styles based on user type
    subscriber: {
      borderColor: 'rosaBarbie',
      background: 'nightWhite',
      backgroundGradient: undefined,
      gifBackground: gifs.general.subscriberGif,
    },
    bit: {
      borderColor: 'rosaBarbie',
      background: 'nightWhite',
      backgroundGradient: undefined,
      gifBackground: gifs.general.bitGif,
    },
    highlighted: {
      borderColor: 'nightWhite',
      background: 'cuteCosmico',
      backgroundGradient: gradients.nightTheme.cuteCosmico,
      gifBackground: undefined,
    },
    vip: {
      borderColor: 'rosaBarbie',
      background: 'nightWhite',
      backgroundGradient: undefined,
      gifBackground: undefined,
    },
    common: {
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
