import React from 'react';
interface TimeSliderProps {
  time: number;
  setTime: (time: number) => void;
}

const TimeSlider: React.FC<TimeSliderProps> = ({ time, setTime }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(Number(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="23"
        value={time}
        onChange={handleChange}
        step="1"
      />
      <div>Selected Time: {time}:00</div>
    </div>
  );
};

export default TimeSlider;
