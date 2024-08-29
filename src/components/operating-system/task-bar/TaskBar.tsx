import React, { useState, useEffect, useRef } from 'react';
import { Flex, Button, useTheme } from '@chakra-ui/react';
import useThemeMapping from '../../../hooks/useThemeMapping';
import baseTheme from '../../../themes/baseTheme';
import { useTimeManager } from '../../../store/contexts/TimeManagerContext';
import SmartGradientText from '../../common/SmartGradientText';
import TaskBarWindow from './TaskBarWindow/TaskBarWindow';

const TaskBar: React.FC = () => {
  const { timeDate } = useTimeManager();
  const themeInfo = useThemeMapping();
  const { color } = themeInfo.getHeaderStyle();
  const { border, borderColor } = baseTheme.components.Header.baseStyle;
  const theme = useTheme();
  const taskbarColor = theme.operatingSystem.taskbar;

  const [windowVisible, setWindowVisible] = useState(false);
  const taskbarRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  const formatTime = (date: Date | undefined): string => {
    if (!date) {
      return 'No time available';
    }

    let hours: number | string = date.getHours();
    const minutes: number | string = date.getMinutes();
    const period: string = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesPadded: string = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${hours}:${minutesPadded} ${period}`;
  };

  const toggleWindowVisibility = () => {
    setWindowVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      windowVisible &&
      windowRef.current &&
      !windowRef.current.contains(event.target as Node) &&
      taskbarRef.current &&
      !taskbarRef.current.contains(event.target as Node)
    ) {
      setWindowVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [windowVisible]);

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
      px={4}
      bg={taskbarColor}
      border={border}
      borderColor={borderColor}
      color={color}
      ref={taskbarRef}
    >
      <Flex direction="row" align="center" w="auto" h="30px" px={2}>
        <Button onClick={toggleWindowVisibility}>
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
      {/* {windowVisible && ( */}
      <TaskBarWindow
        ref={windowRef}
        title="Window Title"
        content={<div>Here is some content!</div>}
      />
      {/* )} */}
    </Flex>
  );
};

export default TaskBar;
