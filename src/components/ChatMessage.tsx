import { Box } from '@chakra-ui/react'
import useThemeMapping from '../hooks/useThemeMapping'
import { MessageModel } from '../utils/models'

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
  className = '',
}: {
  messageBoxStyle: MessageBoxStyle;
  Badges: JSX.Element[];
  Username: JSX.Element;
  content: string;
  className?: string;
}) => {
  return (
    <Box
      borderColor={borderColor}
      bgColor={background}
      bgGradient={backgroundGradient}
      backgroundImage={gifBackground}
      borderWidth="1px"
      borderRadius="12px"
      padding="11"
      width="fit-content"
      className={className}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      boxShadow={boxShadow ? "0px 4px 6px rgba(0, 0, 0, 0.25)" : "none"}
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
  className,
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
      className={className}
    />
  );
};

export default ChatMessage;
