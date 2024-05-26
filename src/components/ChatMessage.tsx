import { Box, Flex } from '@chakra-ui/react';
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import useThemeMapping from '../hooks/useThemeMapping';
import { MessageModel } from '../utils/models';
import Highlighter from '../assets/highlighter.svg';
import { useState } from 'react';

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
  const [fadeOut, setFadeOut] = useState(false);
  const themeInfo = useThemeMapping(); // Use the useThemeMapping hook
  const Badges = message.author.badges.map((badge, i) => (
    <img
      key={badge.name + i}
      src={`${badge.imageUrl}`}
      alt={`${badge.name} ${badge.version} badge`}
    />
  ));

  const handleAnimationComplete = () => {
    // Set fadeOut to true after a slight delay
    setTimeout(() => {
      setFadeOut(true);
    }, 500); // Adjust the delay as needed
  };

  const Username = (
    <div style={{ position: 'relative', display: 'inline-block', overflow: 'visible' }}>
      {/* Background Highlighting */}
      <motion.span
        style={{
          color: message.author.color,
          display: 'inline-block',
          overflow: 'hidden',
          position: 'relative',
          backgroundImage: 'linear-gradient(to right, transparent 50%, yellow 50%)',
          backgroundSize: '200% 100%',
          backgroundPosition: '0% 0%', // Start with transparent background
        }}
        animate={{
          backgroundPosition: '-100% 0', // Animate to fully colored background from left to right
        }}
        transition={{ duration: 0.75, delay: 0.6, type: 'tween' }} // Duration of the animation with a delay
      >
        {message.author.displayName}
      </motion.span>

      {/* SVG Highlighter */}
      <AnimatePresence>
        {!fadeOut && (
          <motion.img
            src={Highlighter} // Replace with the path to your SVG
            alt="Highlighter"
            style={{
              height: '2em', // Adjust as needed
              width: 'auto',
              position: 'absolute',
              left: -10,
              top: -10, // Position the SVG correctly relative to the text
              zIndex: 1,
            }}
            initial={{ x: 0, opacity: 1 }} // Initial position and opacity of the highlighter
            animate={{ x: '400%' }} // Animate highlighter to the right edge of the span and fade out
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, delay: 0.6, type: 'tween' }} // Duration of the highlighter animation with a delay
            onAnimationComplete={handleAnimationComplete} // Handle animation complete event
          />
        )}
      </AnimatePresence>
    </div>
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
