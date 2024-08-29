import React, { forwardRef, useEffect, useRef } from 'react';
import { Box, Flex, Text, useTheme } from '@chakra-ui/react';
import HallOfFame from '../HallOfFame';
import AppList from './AppList';
import baseTheme from '../../../../themes/baseTheme';

interface TaskBarWindowProps {
  title?: string;
  content?: React.ReactNode;
}

const TaskBarWindow = forwardRef<HTMLDivElement, TaskBarWindowProps>(
  ({ title, content }, ref) => {
    const windowRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const taskbarColor = theme.operatingSystem.taskbar;
    const { border, borderColor } = baseTheme.components.Header.baseStyle;

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          windowRef.current &&
          !windowRef.current.contains(event.target as Node)
        ) {
          // Trigger the click-away logic here
          // This function can be passed from parent or can handle its own state
          // For example:
          document.dispatchEvent(new CustomEvent('taskBarWindowClickAway'));
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
      <Box
        width="800px"
        height="600px"
        id="taskbar-window"
        ref={ref}
        position="absolute"
        top="-600px" // Adjust as needed
        left="-3px"
        right="10px"
        bottom="10px"
        border={border}
        borderColor={borderColor}
        bg={taskbarColor}
        borderRadius="md"
        boxShadow="md"
        p={4}
        zIndex={100} // Ensure it's above the taskbar
      >
        <Flex direction="column" h="100%" ref={windowRef}>
          {title && (
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              {title}
            </Text>
          )}
          {/* Window content */}
          <Flex width="100%" height="100%" direction="row">
            {/* Content for the first half */}
            <AppList />

            <HallOfFame />
          </Flex>
        </Flex>
      </Box>
    );
  },
);

TaskBarWindow.displayName = 'TaskBarWindow'; // Optional but good practice for debugging

export default TaskBarWindow;
