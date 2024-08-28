import { TimeRangeKey } from '../../../store/types';
import { CloudConfig } from './ParallaxScene';

export const TWILIGHT_CLOUD_CONFIG: CloudConfig[] = [
  {
    image: 'twilight-5.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.02,
    alphaRange: [0.3, 0.8],
    // scale: 1.5,
  },
  {
    image: 'twilight-2.png',
    position: { x: 0, y: 65 },
    scrollSpeed: 0.02,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
  {
    image: 'twilight-3.png',
    position: { x: 0, y: 65 },
    scrollSpeed: 0.04,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },

  {
    image: 'twilight-4.png',
    position: { x: 0, y: 15 },
    scrollSpeed: 0.1,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
];

export const CLOUD_CONFIGS: { [key in TimeRangeKey]: CloudConfig[] } = {
  Dawn: TWILIGHT_CLOUD_CONFIG,
  Rising: TWILIGHT_CLOUD_CONFIG,
  Morning: TWILIGHT_CLOUD_CONFIG,
  Day: TWILIGHT_CLOUD_CONFIG,
  SuperDay: TWILIGHT_CLOUD_CONFIG,
  DayAlmostDusk: TWILIGHT_CLOUD_CONFIG,
  Dusk: TWILIGHT_CLOUD_CONFIG,
  Twilight: TWILIGHT_CLOUD_CONFIG,
  Night: TWILIGHT_CLOUD_CONFIG,
  DeepNight: TWILIGHT_CLOUD_CONFIG,
  Midnight: TWILIGHT_CLOUD_CONFIG,
  MidnightMidnight: TWILIGHT_CLOUD_CONFIG,
};
