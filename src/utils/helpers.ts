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
