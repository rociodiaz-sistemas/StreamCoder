import { Box, Flex } from '@chakra-ui/react';

import useThemeMapping from '../hooks/useThemeMapping';
import { MessageModel } from '../utils/models';

type MessageProps = {
  message: MessageModel;
  fontSize: string;
} & React.ComponentPropsWithRef<'div'>;

interface MessageBoxStyle {
  borderColor?: string;
  background?: string;
  backgroundGradient?: string;
  gifBackground?: string;
  boxShadow?: string;
}

const MessageBox = ({
  messageBoxStyle: {
    borderColor,
    background,
    backgroundGradient,
    gifBackground,
    boxShadow,
  },
  Badges,
  Username,
  content,
  fontSize,
}: {
  messageBoxStyle: MessageBoxStyle;
  Badges: JSX.Element[];
  Username: JSX.Element;
  content: string;
  fontSize: string; // Define the fontSize prop
}) => {
  return (
    <Box
      w="90%"
      p="1em"
      fontSize={fontSize}
      bgImage={backgroundGradient ? undefined : gifBackground}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgGradient={backgroundGradient}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="12px"
      shadow={boxShadow ? '0px 4px 6px rgba(0, 0, 0, 0.25)' : 'none'}
      bgColor={background}
    >
      <Flex align="center" direction="row">
        <Flex justify="center" w="fit-content" h="fit-content" pr={1}>
          {Badges}
        </Flex>
        {Username}
      </Flex>
      <span>{content}</span>
    </Box>
  );
};

const ChatMessage = ({
  message: { author, content },
  fontSize,
}: MessageProps) => {
  const themeInfo = useThemeMapping(); // Use the useThemeMapping hook
  const Badges = author.badges.map((bg, i) => (
    <img key={i} src={`/badges/${bg}.png`} />
  ));

  const Username = (
    <span style={{ color: author.rgbColor }}>{author.username}</span>
  );

  const messageBoxStyle = themeInfo.getMessageBoxStyles(author.type) || {};

  return (
    <MessageBox
      messageBoxStyle={{
        ...messageBoxStyle,
        boxShadow:
          author.type === 'highlighted' ? 'highlighted-box-shadow' : undefined, // Set boxShadow for highlighted type
      }}
      Badges={Badges}
      Username={Username}
      content={content}
      fontSize={fontSize}
    />
  );
};

export default ChatMessage;
