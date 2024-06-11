import React from 'react';

interface SliderTestProps {
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

const SliderTest: React.FC<SliderTestProps> = ({ currentTime, setCurrentTime }) => {

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(parseFloat(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min={0}
        max={24}
        step={0.01}
        value={currentTime}
        onChange={handleSliderChange}
      />
      <div>Current Time: {currentTime}</div>
    </div>
  );
};

export default SliderTest;
