import { TimeRangeKey } from '../../../store/types';
import { CloudConfig } from './ParallaxScene';

export const RISING_CLOUD_CONFIG: CloudConfig[] = [
  {
    image: 'rising-3.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.02,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
  {
    image: 'rising-4.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.04,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
  {
    image: 'rising-5.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.1,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
  {
    image: 'rising-6.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.04,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
];

export const MORNING_CLOUD_CONFIG: CloudConfig[] = [
  {
    image: 'morning-3.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.04,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },

  {
    image: 'morning-4.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.1,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
];

export const DAY_CLOUD_CONFIG: CloudConfig[] = [
  {
    image: 'day-4.png',
    position: { x: 0, y: 65 },
    scrollSpeed: 0.1,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
  {
    image: 'day-5.png',
    position: { x: 0, y: 65 },
    scrollSpeed: 0.04,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },

  {
    image: 'day-3.png',
    position: { x: 0, y: 15 },
    scrollSpeed: 0.02,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
];

export const SUPERDAY_CLOUD_CONFIG: CloudConfig[] = [
  {
    image: 'superday-2.png',
    position: { x: 0, y: 65 },
    scrollSpeed: 0.02,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
  {
    image: 'superday-3.png',
    position: { x: 0, y: 65 },
    scrollSpeed: 0.04,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
];

export const ALMOSTDUSK_CLOUD_CONFIG: CloudConfig[] = [
  {
    image: 'almostdusk-2.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.02,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },

  {
    image: 'almostdusk-3.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.04,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
];

export const DUSK_CLOUD_CONFIG: CloudConfig[] = [
  {
    image: 'dusk-3.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.02,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },

  {
    image: 'dusk-4.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.04,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
];

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

export const NIGHT_CLOUD_CONFIG: CloudConfig[] = [
  {
    image: 'night-3.png',
    position: { x: 0, y: 70 },
    scrollSpeed: 0.02,
    alphaRange: [0.3, 0.8],
    // scale: 1.5,
  },
  {
    image: 'night-4.png',
    position: { x: 0, y: 65 },
    scrollSpeed: 0.02,
    alphaRange: [0.3, 0.8],
    scale: 1.2,
  },
];

export const CLOUD_CONFIGS: { [key in TimeRangeKey]: CloudConfig[] } = {
  Dawn: DUSK_CLOUD_CONFIG,
  Rising: RISING_CLOUD_CONFIG,
  Morning: SUPERDAY_CLOUD_CONFIG,
  Day: DAY_CLOUD_CONFIG,
  SuperDay: SUPERDAY_CLOUD_CONFIG,
  DayAlmostDusk: ALMOSTDUSK_CLOUD_CONFIG,
  Dusk: DUSK_CLOUD_CONFIG,
  Twilight: TWILIGHT_CLOUD_CONFIG,
  Night: TWILIGHT_CLOUD_CONFIG,
  DeepNight: NIGHT_CLOUD_CONFIG,
  Midnight: MORNING_CLOUD_CONFIG,
  MidnightMidnight: MORNING_CLOUD_CONFIG,
};
