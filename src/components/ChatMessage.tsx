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
  className?: string;
}) => {
  console.log(backgroundGradient);
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
  message: { author, content },
}: MessageProps) => {
  const themeInfo = useThemeMapping(); // Use the useThemeMapping hook
  const Badges = author.badges.map((bg, i) => (
    <img
      key={i}
      src={`/badges/${bg}.png`}
    />
  ));

  const Username = (
    <span style={{ color: author.rgbColor }}>
      {author.username}
    </span>
  );

  const messageBoxStyle = themeInfo.getMessageBoxStyles(author.type) || {};

  return (
    <MessageBox
      messageBoxStyle={{
        ...messageBoxStyle,
        boxShadow: author.type === 'highlighted' ? 'highlighted-box-shadow' : undefined, // Set boxShadow for highlighted type
      }}
      Badges={Badges}
      Username={Username}
      content={content}
    />
  );
};

export default ChatMessage;
