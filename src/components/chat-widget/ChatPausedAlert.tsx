import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { GiPauseButton } from 'react-icons/gi';
import { ImArrowDown2 } from 'react-icons/im';

const ChatPausedAlert = ({ onClick: handleClick }: { onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  const label = isHovered ? (
    <Flex align='center' gap='10px'>
      <ImArrowDown2 />
      See new messages
    </Flex>
  ) : (
    <Flex align='center' gap='10px'>
      <GiPauseButton />
      Chat paused due to scroll
    </Flex>
  );

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {label}
    </Box>
  );
};

export default ChatPausedAlert;
