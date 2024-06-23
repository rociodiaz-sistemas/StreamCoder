import React, { useState, useEffect } from 'react';

export interface TimeSliderProps {
  startTime?: { hours: number; minutes: number }; // Optional initial time
  minTime?: { hours: number; minutes: number }; // Optional minimum time (default 00:00)
  maxTime?: { hours: number; minutes: number }; // Optional maximum time (default 23:59)
  overNight?: boolean; // Whether the time range is overnight
  onChange: (time: { hours: number; minutes: number }) => void; // Callback when time changes
}

const TimeSlider: React.FC<TimeSliderProps> = ({ startTime, minTime, maxTime, overNight, onChange }) => {
  const [selectedTime, setSelectedTime] = useState(startTime || { hours: 0, minutes: 0 });

  useEffect(() => {
    if (startTime) {
      setSelectedTime(startTime);
    }
  }, [startTime]);

  const convertToContinuousScale = (hours: number, minutes: number) => {
    if (overNight && minTime && maxTime && maxTime.hours < minTime.hours) {
      return hours < minTime.hours ? (hours + 24) * 60 + minutes : hours * 60 + minutes;
    }
    return hours * 60 + minutes;
  };

  const convertFromContinuousScale = (minutes: number) => {
    const hours = Math.floor(minutes / 60) % 24;
    const adjustedMinutes = minutes % 60;
    return { hours, minutes: adjustedMinutes };
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const minutes = parseInt(event.target.value);
    const time = convertFromContinuousScale(minutes);
    setSelectedTime(time);
    onChange(time);
  };

  const sliderMin = convertToContinuousScale(minTime?.hours ?? 0, minTime?.minutes ?? 0);
  const sliderMax = convertToContinuousScale(maxTime?.hours ?? 23, maxTime?.minutes ?? 59);
  const currentSliderValue = convertToContinuousScale(selectedTime.hours, selectedTime.minutes);

  const formatTime = (hours: number, minutes: number): string => {
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  };

  return (
    <div>
      <input
        type="range"
        min={sliderMin}
        max={sliderMax}
        value={currentSliderValue}
        onChange={handleChange}
        step="1"
      />
      <div>Selected Time: {formatTime(selectedTime.hours, selectedTime.minutes)}</div>
    </div>
  );
};

export default TimeSlider;
