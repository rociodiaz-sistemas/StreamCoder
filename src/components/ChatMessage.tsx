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
}

const MessageBox = ({
  messageBoxStyle,
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
      borderColor={messageBoxStyle.borderColor}
      bgColor={messageBoxStyle.background}
      bgGradient={messageBoxStyle.backgroundGradient}
      backgroundImage={messageBoxStyle.gifBackground}
      borderWidth="1px"
      borderRadius="12px"
      padding="11"
      width="fit-content"
      className={className}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
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
      messageBoxStyle={messageBoxStyle}
      Badges={Badges}
      Username={Username}
      content={content}
      className={className}
    />
  );
};

export default ChatMessage;
