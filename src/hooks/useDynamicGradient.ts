import { useState, useEffect } from 'react';

type GradientColor = {
  start: number;
  end: number;
  gradient: string;
};

const useDynamicGradientColor = (hours?: number, minutes?: number): string => {
  const [gradientColor, setGradientColor] = useState<string>('');

  const timeRanges: { [key: string]: GradientColor } = {
    Dawn: {
      start: 5,
      end: 6,
      gradient:
        'linear-gradient(180deg, rgba(23,19,19,1) 3%, rgba(33,52,105,1) 40%, rgba(46,68,128,1) 72%, rgba(60,84,154,1) 100%)',
    },
    Rising: {
      start: 6,
      end: 7,
      gradient:
        'linear-gradient(180deg, rgba(50,58,69,1) 0%, rgba(74,104,145,1) 20%, rgba(152,169,179,1) 73%, rgba(200,192,157,1) 100%)',
    },
    Morning: {
      start: 7,
      end: 10,
      gradient:
        'linear-gradient(180deg, rgba(94,155,221,1) 18%, rgba(178,210,245,1) 61%, rgba(224,219,194,1) 87%, rgba(255,247,201,1) 100%)',
    },
    Day: {
      start: 10,
      end: 15,
      gradient:
        'linear-gradient(180deg, rgba(46,136,255,1) 41%, rgba(115,165,227,1) 61%, rgba(255,249,226,1) 100%)',
    },
    SuperDay: {
      start: 15,
      end: 16,
      gradient:
        'linear-gradient(180deg, rgba(13,120,227,1) 0%, rgba(103,189,255,1) 68%, rgba(255,255,255,1) 100%)',
    },
    DayAlmostDusk: {
      start: 16,
      end: 17,
      gradient:
        'linear-gradient(180deg, rgba(142,205,230,1) 2.5%, rgba(154,189,255,1) 32%, rgba(235,207,181,1) 100%)',
    },
    Dusk: {
      start: 17,
      end: 18,
      gradient:
        'linear-gradient(180deg, #64509F 2.5%, #CEA9DB 32%, #EBCFB5 100%)',
    },
    Twilight: {
      start: 18,
      end: 19,
      gradient:
        'linear-gradient(180deg, rgba(44,36,68,1) 0%, rgba(92,79,129,1) 43%, rgba(131,92,159,1) 70%, rgba(154,115,167,1) 88%, rgba(174,138,182,1) 98%)',
    },
    Night: {
      start: 19,
      end: 20,
      gradient:
        'linear-gradient(180deg, #141311 0%, #2D2E38 45.5%, #333850 60%, #553A77 100%)',
    },
    DeepNight: {
      start: 20,
      end: 22,
      gradient:
        'linear-gradient(180deg, rgba(20,19,17,1) 15%, rgba(41,49,70,1) 62%, rgba(54,59,108,1) 86%, rgba(61,58,119,1) 100%)',
    },
    Midnight: {
      start: 22,
      end: 23.59,
      gradient:
        'linear-gradient(180deg, rgba(0,0,0,1) 15%, rgba(16,32,78,1) 67%, rgba(18,43,116,1) 88%, rgba(32,31,135,1) 100%)',
    },
    MidnightMidnight: {
      start: 0,
      end: 5,
      gradient:
        'linear-gradient(180deg, rgba(0,0,0,1) 15%, rgba(16,32,78,1) 67%, rgba(18,43,116,1) 88%, rgba(32,31,135,1) 100%)',
    },
  };

  useEffect(() => {
    const determineGradientColor = (hours: number, minutes: number) => {
      let selectedKey: string | null = null;

      // Determine the current time range
      for (const key in timeRanges) {
        const range = timeRanges[key];
        if (
          (hours >= range.start && hours < range.end) ||
          (hours >= range.start && range.end === 24) // Handle midnight range (0-5)
        ) {
          selectedKey = key;
          break;
        }
      }

      if (selectedKey) {
        setGradientColor(timeRanges[selectedKey].gradient);
      }
    };

    // Initial calculation
    const now = new Date();
    determineGradientColor(
      hours !== undefined ? hours : now.getHours(),
      minutes !== undefined ? minutes : now.getMinutes(),
    );

    // Interval to update every minute
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      determineGradientColor(currentTime.getHours(), currentTime.getMinutes());
    }, 60000);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [hours, minutes]);

  return gradientColor;
};

export default useDynamicGradientColor;
