import React from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import useThemeMapping from '../../hooks/useThemeMapping';
import baseTheme from '../../themes/baseTheme';
import { useTimeManager } from '../../store/contexts/TimeManagerContext';

interface TaskBarProps {
  // props here
}

const TaskBar: React.FC<TaskBarProps> = (props) => {
  const { timeDate } = useTimeManager();
  const themeInfo = useThemeMapping();
  const { backgroundColor, color } = themeInfo.getHeaderStyle(); // Destructure backgroundColor and color
  const { border, borderColor } = baseTheme.components.Header.baseStyle; // Destructure border and borderColor

  const formatTime = (date: Date | undefined): string => {
    if (!date) {
      return 'No time available'; // or handle this case however you'd like
    }

    let hours: number | string = date.getHours();
    const minutes: number | string = date.getMinutes();
    const period: string = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Pad minutes with leading zero if needed
    const minutesPadded: string = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${hours}:${minutesPadded} ${period}`;
  };

  return (
    <Flex
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex={99}
      align="center"
      justify="space-between"
      direction="row"
      w="100%"
      h="fit-content"
      px={4} // Adjust padding as needed
      textColor={color}
      bg={backgroundColor}
      border={border}
      borderColor={borderColor}
    >
      <Flex align="center" direction="row" w="auto" h="30px" px={2}>
        <Box>
          <Text
            as="b"
            fontSize="20px" // Adjust font size as needed
            bgGradient="linear(to-b, rgba(44,36,68,1) 0%, rgba(92,79,129,1) 43%, rgba(131,92,159,1) 70%, rgba(154,115,167,1) 88%, rgba(174,138,182,1) 98%)"
            bgClip="text"
            color="transparent"
          >
            Bug OS
          </Text>
        </Box>
        <Text
          as="b"
          fontSize="20px" // Adjust font size as needed
          bgGradient="linear(to-b, rgba(44,36,68,1) 0%, rgba(92,79,129,1) 43%, rgba(131,92,159,1) 70%, rgba(154,115,167,1) 88%, rgba(174,138,182,1) 98%)"
          bgClip="text"
          color="transparent"
        >
          {formatTime(timeDate)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default TaskBar;
