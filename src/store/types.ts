export type TimeRangeKey =
  | 'Dawn'
  | 'Rising'
  | 'Morning'
  | 'Day'
  | 'SuperDay'
  | 'DayAlmostDusk'
  | 'Dusk'
  | 'Twilight'
  | 'Night'
  | 'DeepNight'
  | 'Midnight'
  | 'MidnightMidnight';

export type TimeRange = {
  start: number;
  end: number;
};

export type GradientKey = TimeRangeKey; // Same keys for gradients
export type GradientColor = string;
