import React, { createContext, useContext, useState, useEffect } from 'react';
import { gradients, timeRangesExpanded } from '../../utils/helpers';
import { TimeRangeKey } from '../types';
import { CloudConfig } from '../../components/background/parallax-clouds/ParallaxScene';
import { CLOUD_CONFIGS } from '../../components/background/parallax-clouds/CloudsConfig';

type TimeManagerContextType = {
  gradientColor: string;
  cloudConfig: CloudConfig[];
  hour: number;
  minute: number;
  astralBody: 'moon' | 'sun';
  timeDate?: Date;
};

const TimeManagerContext = createContext<TimeManagerContextType | undefined>(
  undefined,
);

// Using the original version of getAstralBody
export const getAstralBody = (currentTime: Date): 'moon' | 'sun' => {
  const hours = currentTime.getHours();
  return hours >= 5 && hours < 18 ? 'sun' : 'moon';
};

const TimeManagerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [gradientColor, setGradientColor] = useState<string>('');
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [astralBody, setAstralBody] = useState<'moon' | 'sun'>('sun');
  const [timeDate, setTimeDate] = useState<Date | undefined>(undefined);
  const [cloudConfig, setCloudConfig] = useState<CloudConfig[]>(
    CLOUD_CONFIGS['Night']
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
        const clouds = CLOUD_CONFIGS[selectedKey as TimeRangeKey]
        setGradientColor(gradientColor);
        setCloudConfig(clouds);
      }
    };

    determineTimeData();
    const intervalId = setInterval(determineTimeData, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimeManagerContext.Provider
      value={{ gradientColor, cloudConfig, hour, minute, astralBody, timeDate }}
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
