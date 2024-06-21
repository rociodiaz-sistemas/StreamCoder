import React, { useState } from 'react';

interface TimeSliderProps {
  startTime?: { hours: number; minutes: number }; // Optional initial time
  minTime?: { hours: number; minutes: number }; // Optional minimum time (default 00:00)
  maxTime?: { hours: number; minutes: number }; // Optional maximum time (default 23:59)
  onChange: (time: { hours: number; minutes: number }) => void; // Callback when time changes
}

const TimeSlider: React.FC<TimeSliderProps> = ({ startTime, minTime, maxTime, onChange }) => {
  const [selectedTime, setSelectedTime] = useState(startTime || { hours: 0, minutes: 0 });

  // Calculate slider min and max values in minutes
  const sliderMin = minTime ? minTime.hours * 60 + minTime.minutes : 0;
  const sliderMax = maxTime ? maxTime.hours * 60 + maxTime.minutes : 1439; // 23:59 in minutes

  // Handle slider change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const minutes = parseInt(event.target.value);
    const hours = Math.floor(minutes / 60);
    setSelectedTime({ hours, minutes: minutes % 60 });
    onChange({ hours, minutes: minutes % 60 });
  };

  // Format time for display
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
        value={selectedTime.hours * 60 + selectedTime.minutes}
        onChange={handleChange}
        step="1"
      />
      <div>Selected Time: {formatTime(selectedTime.hours, selectedTime.minutes)}</div>
    </div>
  );
};

export default TimeSlider;
