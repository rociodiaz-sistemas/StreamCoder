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

export interface Email {
  id: string;
  sender: string;
  timestamp: string; // ISO string or format used for the timestamp
  isRead: boolean;
  isFavorite: boolean;
}
