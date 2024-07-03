import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { GiPauseButton } from 'react-icons/gi';
import { ImArrowDown2 } from 'react-icons/im';

const ChatPausedAlert = ({ onClick: handleClick }: { onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  const label = isHovered ? (
    <Flex align='center' direction='row'>
      <ImArrowDown2 />
      See new messages
    </Flex>
  ) : (
    <Flex align='center' direction='row'>
      <GiPauseButton />
      Chat paused due to scroll
    </Flex>
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
