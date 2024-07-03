import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { GiPauseButton } from 'react-icons/gi';
import { ImArrowDown2 } from 'react-icons/im';

const ChatPausedAlert = ({ onClick: handleClick }: { onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  const label = isHovered ? (
    <Flex pos='absolute' bottom='10px' align='center' direction='row'>
      <ImArrowDown2 />
      See new messages
    </Flex>
  ) : (
    <Flex pos='absolute' bottom='10px' align='center' direction='row'>
      <GiPauseButton />Bottom
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
