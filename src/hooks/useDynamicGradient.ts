import { useState, useEffect } from 'react';
import chroma from 'chroma-js';

type Gradient = {
  startColor: string;
  endColor: string;
};

const useDynamicGradientColor = (hours?: number, minutes?: number): string => {
  const [gradientColor, setGradientColor] = useState<string>('');

  const timeRanges: { [key: string]: { start: number; end: number } } = {
    DawnSky: { start: 5, end: 6 },
    InterDawnMorning: { start: 5.3, end: 6 },
    MorningSky: { start: 6, end: 10 },
    DaySky: { start: 10, end: 16 },
    AfternoonSky: { start: 16, end: 18 },
    EveningSky: { start: 18, end: 20 },
    NightSky: { start: 20, end: 24 },
    MidnightSky: { start: 0, end: 5 },
  };

  useEffect(() => {
    const gradients: { [key: string]: Gradient } = {
      DawnSky: {
        startColor: '#242321',
        endColor: '#325782',
      },
      InterDawnMorning: {
        startColor: '#242321',
        endColor: '#325782',
      },
      MorningSky: {
        startColor: '#8ebfe4',
        endColor: '#e0e7a6',
      },
      DaySky: {
        startColor: '#8ebfe4',
        endColor: '#e0e7a6',
      },
      AfternoonSky: {
        startColor: '#FFC926',
        endColor: '#EBDDB5',
      },
      EveningSky: {
        startColor: '#553A77',
        endColor: '#1E2025',
      },
      NightSky: {
        startColor: '#141311',
        endColor: '#553A77',
      },
      MidnightSky: {
        startColor: '#141311',
        endColor: '#000044',
      },
    };

    const determineGradientColor = (hours: number, minutes: number) => {
      let currentGradient: Gradient | null = null;
      let selectedKey: string | null = null;

      // Determine the current time range
      for (const key in timeRanges) {
        const range = timeRanges[key];
        if (hours >= range.start && hours < range.end) {
          currentGradient = gradients[key];
          selectedKey = key;
          break;
        }
      }

      if (currentGradient && selectedKey) {
        // Calculate the total minutes from the start of the current range
        const totalMinutesInHour = 60;
        const totalMinutes = hours * totalMinutesInHour + minutes;

        // Calculate the percentage of time passed within the current range
        const rangeDuration =
          (timeRanges[selectedKey].end - timeRanges[selectedKey].start) *
          totalMinutesInHour;
        let percentage =
          (totalMinutes - timeRanges[selectedKey].start * totalMinutesInHour) /
          rangeDuration;

        // Adjust percentage for smooth transition in the last two hours
        if (percentage >= 0.85) {
          percentage = 0.85 + (percentage - 0.85) / 7; // Gradual increase in the last two hours
        }

        // Interpolate between the start and end colors of the gradient
        const interpolatedColor = chroma
          .scale([currentGradient.startColor, currentGradient.endColor])
          .mode('lab')
          .correctLightness()
          .gamma(0.8)
          .domain([0, 1])
          .padding([0.2, -0.4])
          .out('hex')(percentage);

        setGradientColor(
          `linear-gradient(180deg, ${currentGradient.startColor}, ${interpolatedColor}, ${currentGradient.endColor})`,
        );
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
