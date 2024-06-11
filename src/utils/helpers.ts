export const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const timeRanges: { [key: string]: { start: number; end: number } } = {
  MorningSky: { start: 5, end: 10 },
  DaySky: { start: 10, end: 16 },
  AfternoonSky: { start: 16, end: 18 },
  EveningSky: { start: 18, end: 20 },
  NightSky: { start: 20, end: 24 },
  MidnightSky: { start: 24, end: 5 },
};
