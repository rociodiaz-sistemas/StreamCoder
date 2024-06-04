import { useState, useEffect } from 'react';
import chroma from 'chroma-js';

type Gradient = {
  startColor: string;
  endColor: string;
};

const useDynamicGradientColor = (): string => {
  const [gradientColor, setGradientColor] = useState<string>('');

  useEffect(() => {
    const gradients: { [key: string]: Gradient } = {
      MorningSky: {
        startColor: '#A9ABDB',
        endColor: '#F5F5F5',
      },
      DaySky: {
        startColor: '#FFC926',
        endColor: '#A9BEDB',
      },
      AfternoonSky: {
        startColor: '#64509F',
        endColor: '#EBDDB5',
      },
      NightSky: {
        startColor: '#141311',
        endColor: '#553A77',
      },
    };

    const determineGradientColor = () => {
      const now = new Date();
      const currentHour = now.getHours(); // Get the current hour

      // Find the current gradient based on the current hour
      let currentGradient: Gradient | null = null;
      if (currentHour >= 5 && currentHour < 10) {
        currentGradient = gradients.MorningSky;
      } else if (currentHour >= 10 && currentHour < 16) {
        currentGradient = gradients.DaySky;
      } else if (currentHour >= 16 && currentHour < 20) {
        currentGradient = gradients.AfternoonSky;
      } else {
        currentGradient = gradients.NightSky;
      }

      if (currentGradient) {
        // Calculate the percentage of time passed within the current hour
        const minutesPassed = now.getMinutes();
        const totalMinutesInHour = 60;
        const percentage = minutesPassed / totalMinutesInHour;

        // Interpolate between the start and end colors of the gradient
        const interpolatedColor = chroma
          .scale([currentGradient.startColor, currentGradient.endColor])
          .mode('lab')
          .correctLightness()
          .gamma(0.8)
          .domain([0, 1])
          .padding([0.2, -0.4])
          .out('hex')(percentage);

        setGradientColor(`linear-gradient(180deg, ${currentGradient.startColor}, ${interpolatedColor}, ${currentGradient.endColor})`);
      }
    };

    determineGradientColor(); // Initial calculation
    const intervalId = setInterval(determineGradientColor, 60000); // Update every minute

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  return gradientColor;
};

export default useDynamicGradientColor;
