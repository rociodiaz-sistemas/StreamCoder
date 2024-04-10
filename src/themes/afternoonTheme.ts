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
  },
  messageStyles: {
    // Define message box styles based on user type
    subscriber: {
      borderColor: 'lila',
      background: 'rosaPalido',
      backgroundGradient: '',
      gifBackground: gifs.general.subscriberGif,
    },
    bit: {
      borderColor: 'lila',
      background: 'rosaPalido',
      backgroundGradient: '',
      gifBackground: gifs.general.bitGif,
    },
    highlighted: {
      borderColor: 'nightWhite',
      background: '',
      backgroundGradient: gradients.afternoonTheme.nightSkyAfternoon,
      gifBackground: '',
    },
    vip: {
      borderColor: 'lila',
      background: 'rosaPalido',
      backgroundGradient: '',
      gifBackground: '',
    },
    common: {
      borderColor: 'lila',
      background: 'rosaPalido',
      backgroundGradient: '',
      gifBackground: '',
    },
  },
  gradients: {
    AfternoonSky:
      'linear-gradient(180deg, #64509F 2.5%, #CEA9DB 32%, #EBDDB5 100%)',
  },
};
