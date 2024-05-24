import { Box } from '@chakra-ui/react';

import useThemeMapping from '../hooks/useThemeMapping';
import { MessageModel } from '../utils/models';

type MessageProps = {
  message: MessageModel
} & React.ComponentPropsWithRef<'div'>

interface MessageBoxStyle {
  borderColor?: string;
  background?: string;
  backgroundGradient?: string;
  gifBackground?: string;
  boxShadow?: string;
}

const MessageBox = ({
  messageBoxStyle: { borderColor, background, backgroundGradient, gifBackground, boxShadow },
  Badges,
  Username,
  content,
}: {
  messageBoxStyle: MessageBoxStyle;
  Badges: JSX.Element[];
  Username: JSX.Element;
  content: string;
}) => {

  return (
    <Box
      w="fit-content"
      p="11"
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
      <div>
        {Badges}
        {Username}
      </div>
      <span>{content}</span>
    </Box>
  );
};

const ChatMessage = ({
  message
}: MessageProps) => {
  const themeInfo = useThemeMapping(); // Use the useThemeMapping hook
  const Badges = message.author.badges.map((badge, i) => (
    <img
      key={badge.name + i}
      src={`${badge.imageUrl}`}
      alt={`${badge.name} ${badge.version} badge`}
    />
  ));

  const Username = (
    <span style={{ color: message.author.color }}>
      {message.author.displayName}
    </span>
  );

  const messageBoxStyle = themeInfo.getMessageBoxStyles(message.type) || {};

  return (
    <MessageBox
      messageBoxStyle={{
        ...messageBoxStyle,
        boxShadow: message.type === 'highlighted' ? 'highlighted-box-shadow' : undefined, // Set boxShadow for highlighted type
      }}
      Badges={Badges}
      Username={Username}
      content={message.content}
    />
  );
};

export default ChatMessage;
