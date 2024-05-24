import { useState } from 'react';
import { GiPauseButton } from 'react-icons/gi';
import { ImArrowDown2 } from 'react-icons/im';

const ChatPausedAlert = ({ onClick: handleClick }: { onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  const label = isHovered ? (
    <span style={{
      cursor: 'pointer',
    }}>
      <ImArrowDown2 />
      See new messages
    </span>
  ) : (
    <span>
      <GiPauseButton />
      Chat paused due to scroll
    </span>
  );

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default ChatPausedAlert;
