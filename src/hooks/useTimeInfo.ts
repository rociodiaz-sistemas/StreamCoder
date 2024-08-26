// useTimeInfo.ts
import { useEffect, useState } from 'react';

interface TimeInfo {
  gradientColor: string;
  cloudImage: string;
  astralBody: string;
  currentTime: Date;
}

const timeRanges = {
  Dawn: {
    start: 5,
    end: 6,
    gradient: '...',
    cloudImage: 'dawn-cloud.png',
    astralBody: 'Dawn Astral Body',
  },
  // Add other time ranges...
};

const useTimeInfo = (): TimeInfo => {
  const [timeInfo, setTimeInfo] = useState<TimeInfo>({
    gradientColor: '',
    cloudImage: '',
    astralBody: '',
    currentTime: new Date(),
  });

  useEffect(() => {
    const updateTimeInfo = () => {
      const now = new Date();
      const currentHour = now.getHours();

      // Determine the current time range
      for (const [
        key,
        { start, end, gradient, cloudImage, astralBody },
      ] of Object.entries(timeRanges)) {
        if (
          (currentHour >= start && currentHour < end) ||
          (currentHour >= start && end === 24)
        ) {
          setTimeInfo({
            gradientColor: gradient,
            cloudImage,
            astralBody,
            currentTime: now,
          });
          break;
        }
      }
    };

    updateTimeInfo();
    const intervalId = setInterval(updateTimeInfo, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return timeInfo;
};

export default useTimeInfo;
