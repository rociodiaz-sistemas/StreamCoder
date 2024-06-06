export const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const MORNING_START = 5;
export const MORNING_END = 12;
export const DAY_START = 12;
export const DAY_END = 18;
export const AFTERNOON_START = 18;
export const AFTERNOON_END = 20;