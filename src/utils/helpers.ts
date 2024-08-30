import {
  GradientColor,
  GradientKey,
  TimeRange,
  TimeRangeKey,
} from '../store/types';

export const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const timeRanges: { [key: string]: { start: number; end: number } } = {
  MorningSky: { start: 5, end: 10 },
  DaySky: { start: 10, end: 16 },
  AfternoonSky: { start: 16, end: 18 },
  EveningSky: { start: 18, end: 20 },
  NightSky: { start: 20, end: 24 },
  MidnightSky: { start: 0, end: 5 },
};
export const MOON_START_TIME = { hours: 18, minutes: 0 };
export const MOON_PEAK_TIME = { hours: 23, minutes: 59 };
export const MOON_END_TIME = { hours: 5, minutes: 0 };
export const SUN_START_TIME = { hours: 5, minutes: 0 };
export const SUN_PEAK_TIME = { hours: 14, minutes: 0 };
export const SUN_END_TIME = { hours: 18, minutes: 0 };

export const getAstralBody = (currentTime: Date): 'moon' | 'sun' => {
  const hours = currentTime.getHours();
  return hours >= 5 && hours < 18 ? 'sun' : 'moon';
};

export const STARFIELD_INDEX = 0;
export const MOON_INDEX = 1;
export const UFO_INDEX = 2;
export const LADY_BUG_INDEX = 3;

export const timeRangesExpanded: Record<TimeRangeKey, TimeRange> = {
  Dawn: { start: 5, end: 7 },
  Rising: { start: 6, end: 7 },
  Morning: { start: 7, end: 10 },
  Day: { start: 10, end: 15 },
  SuperDay: { start: 15, end: 16 },
  DayAlmostDusk: { start: 16, end: 17 },
  Dusk: { start: 17, end: 18 },
  Twilight: { start: 18, end: 19 },
  Night: { start: 19, end: 20 },
  DeepNight: { start: 20, end: 22 },
  Midnight: { start: 22, end: 23.59 },
  MidnightMidnight: { start: 0, end: 5 },
};

export const gradients: Record<GradientKey, GradientColor> = {
  Dawn: 'linear-gradient(180deg, #D76F07 0%, #FED987 100%)',
  Rising: 'linear-gradient(180deg, #D0E9F2 18.5%, #FFB000 100%)',
  Morning: ' linear-gradient(180deg, #D0E9F2 20.5%, #FFEABC 76%)',
  Day: 'linear-gradient(180deg, #E4F5FD 0%, #C8E9FC 61%)',
  SuperDay: 'linear-gradient(180deg, #FFFFFF 29%, #BCDEFF 100%)',
  DayAlmostDusk: 'linear-gradient(180deg, #CFE7FF 31.5%, #EED6F7 79.5%)',
  Dusk: 'linear-gradient(180deg, #64509F 2.5%, #CEA9DB 47%, #EBCFB5 100%)',
  Twilight:
    'linear-gradient(180deg, #2C2444 0%, #5C4F81 43%, #835C9F 70%, #9A73A7 88%, #AE8AB6 98%)',
  Night: 'linear-gradient(180deg, #1D1C39 0%, #423062 67%, #553A77 100%)',
  DeepNight: 'linear-gradient(180deg, #10204E 43%, #40295E 100%)',
  Midnight:
    'linear-gradient(180deg, #000000 15%, #10204E 67%, #122B74 88%, #201F87 100%)',
  MidnightMidnight:
    'linear-gradient(180deg, #000000 15%, #091127 67%, #0B173A 88%, #2E2D64 100%)',
};
