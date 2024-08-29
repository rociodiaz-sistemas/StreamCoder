import React from 'react';
import { Box, Button, Flex, Text, useTheme } from '@chakra-ui/react';
import useThemeMapping from '../../hooks/useThemeMapping';
import baseTheme from '../../themes/baseTheme';
import { useTimeManager } from '../../store/contexts/TimeManagerContext';
import SmartGradientText from '../common/SmartGradientText';

interface TaskBarProps {
  // props here
}

const TaskBar: React.FC<TaskBarProps> = (props) => {
  const { timeDate } = useTimeManager();
  const themeInfo = useThemeMapping();
  const { color } = themeInfo.getHeaderStyle(); // Destructure backgroundColor and color
  const { border, borderColor } = baseTheme.components.Header.baseStyle; // Destructure border and borderColor
  const theme = useTheme();
  const taskbarColor = theme.operatingSystem.taskbar;

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
      bg={taskbarColor}
      border={border}
      borderColor={borderColor}
      color={color}
    >
      <Flex
        direction="row"
        align="center"
        w="auto"
        h="30px"
        px={2}
        id="taskbar-content"
      >
        <Button>
          <SmartGradientText
            text="LadyBug OS"
            gradient="linear-gradient(180deg, rgba(23,19,19,1) 3%, rgba(33,52,105,1) 40%, rgba(46,68,128,1) 72%, rgba(60,84,154,1) 100%)"
          />
        </Button>
      </Flex>
      <Flex direction="row" align="center" w="auto" h="30px" px={2}>
        <SmartGradientText
          text={formatTime(timeDate)}
          gradient="linear-gradient(180deg, rgba(23,19,19,1) 3%, rgba(33,52,105,1) 40%, rgba(46,68,128,1) 72%, rgba(60,84,154,1) 100%)"
        />
      </Flex>
    </Flex>
  );
};

export default TaskBar;
