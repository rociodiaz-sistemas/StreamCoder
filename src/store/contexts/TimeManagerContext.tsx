import React, { createContext, useContext, useState, useEffect } from 'react';
import { gradients, timeRangesExpanded } from '../../utils/helpers';
import { TimeRangeKey } from '../types';
import { CloudConfig } from '../../components/background/parallax-clouds/ParallaxScene';

type TimeManagerContextType = {
  gradientColor: string;
  sceneKey: string;
  hour: number;
  minute: number;
  astralBody: 'moon' | 'sun';
  timeDate?: Date;
};

const TimeManagerContext = createContext<TimeManagerContextType | undefined>(
  undefined,
);

const sceneMapping: { [key: string]: string } = {
  Dawn: 'DawnScene',
  Rising: 'RisingScene',
  Morning: 'MorningScene',
  Day: 'DayScene',
  SuperDay: 'SuperDayScene',
  DayAlmostDusk: 'DayAlmostDuskScene',
  Dusk: 'DuskScene',
  Twilight: 'TwilightScene',
  Night: 'NightScene',
  DeepNight: 'DeepNightScene',
  Midnight: 'MidnightScene',
  MidnightMidnight: 'MidnightMidnightScene',
};

// Using the original version of getAstralBody
export const getAstralBody = (currentTime: Date): 'moon' | 'sun' => {
  const hours = currentTime.getHours();
  return hours >= 5 && hours < 18 ? 'sun' : 'moon';
};

const TimeManagerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [gradientColor, setGradientColor] = useState<string>('');
  const [sceneKey, setSceneKey] = useState<string>('');
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [astralBody, setAstralBody] = useState<'moon' | 'sun'>('sun');
  const [timeDate, setTimeDate] = useState<Date | undefined>(undefined);
  const [CloudConfig, setCloudConfig] = useState<CloudConfig | undefined>(
    undefined,
  );

  useEffect(() => {
    const determineTimeData = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setTimeDate(now);
      setHour(hours);
      setMinute(minutes);
      setAstralBody(getAstralBody(now));

      let selectedKey: string | null = null;
      for (const key in timeRangesExpanded) {
        const range = timeRangesExpanded[key as TimeRangeKey]; // Add type assertion to fix the error
        if (
          (hours >= range.start && hours < range.end) ||
          (hours >= range.start && range.end === 24)
        ) {
          selectedKey = key;
          break;
        }
      }

      if (selectedKey) {
        const gradientColor = gradients[selectedKey as TimeRangeKey];
        setGradientColor(gradientColor);
        setSceneKey(sceneMapping[selectedKey]);
      }
    };

    determineTimeData();
    const intervalId = setInterval(determineTimeData, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimeManagerContext.Provider
      value={{ gradientColor, sceneKey, hour, minute, astralBody, timeDate }}
    >
      {children}
    </TimeManagerContext.Provider>
  );
};

const useTimeManager = () => {
  const context = useContext(TimeManagerContext);
  if (context === undefined) {
    throw new Error('useTimeManager must be used within a TimeManagerProvider');
  }
  return context;
};

export { TimeManagerProvider, useTimeManager };
