import React from 'react';

export interface ComponentTimeProps {
  time: number;
}

const ComponentTime: React.FC<ComponentTimeProps> = ({ time }) => {
  return (
    <div>
      <p>The current time is: {time}:00</p>
      {/* Add your component logic here based on the time prop */}
    </div>
  );
};

export default ComponentTime;


