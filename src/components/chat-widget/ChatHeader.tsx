import { Flex, Box, Text } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';
import useThemeMapping from '../../hooks/useThemeMapping';
import baseTheme from '../../themes/baseTheme';

type HeaderProps = {
  onClick: () => void;
  height: number;
  defaultHeight: number;
  width: number;
  defaultWidth: number;
};

export const ChatHeader = ({
  onClick,
  height,
  defaultHeight,
  width,
  defaultWidth,
}: HeaderProps) => {
  const themeInfo = useThemeMapping(); // Use the useThemeMapping hook
  const { backgroundColor, color } = themeInfo.getHeaderStyle(); // Destructure backgroundColor and color
  const { border, borderColor } = baseTheme.components.Header.baseStyle;

  const hover = {
    background: color,
    color: backgroundColor,
  };

  return (
    <Flex
      zIndex={99}
      align="center"
      justify="space-between"
      direction="row"
      w="inherit"
      h="fit-content"
      px={1}
      textColor={color}
      bg={backgroundColor}
      border={border}
      borderColor={borderColor}
    >
      <Flex align="center" direction="row" w="fit-content" h="fit-content">
        <IconButton
          color={color}
          _hover={hover}
          aria-label="Resize"
          colorScheme=""
          icon={<ArrowRightIcon />}
          onClick={onClick}
          style={{
            display:
              height !== defaultHeight || width !== defaultWidth
                ? 'block'
                : 'none',
          }}
        />
        <Box pl={2}>
          <Text as="b" fontSize="20px">
            Chat
          </Text>
        </Box>
      </Flex>
      <Box>
        <IconButton
          color={color}
          _hover={hover}
          aria-label="Close window"
          colorScheme=""
          icon={<CloseIcon />}
          marginInlineEnd='20px'
        />
      </Box>
    </Flex>
  );
};
