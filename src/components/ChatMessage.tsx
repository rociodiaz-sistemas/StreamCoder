import { Box, Flex } from '@chakra-ui/react';
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ scale: 0.5, opacity: 0, y: -20 }} // Initial scale, opacity, and y position of the message
      animate={{ scale: 1, opacity: 1, y: 0 }} // Animation when the message appears
      transition={{ duration: 0.3 }} // Duration of the animation
    >
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
          {/* <Flex justify="center" w="fit-content" h="fit-content" pr={1}>
            {Badges}
          </Flex> */}
          {Username}
        </Flex>
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
      </Box>
    </motion.div>
  );
};

const ChatMessage = ({
  message, fontSize,
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
      fontSize={fontSize}
    />
  );
};

export default ChatMessage;
