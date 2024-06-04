import React, { useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import useChatLiveModeScrolling from '../../hooks/useChatLiveModeScrolling';
import useThemeMapping from '../../hooks/useThemeMapping';
import { MessageModel } from '../../utils/models';
import baseTheme from '../../themes/baseTheme';
import ChatMessage from './chat-message/ChatMessage';
import ChatPausedAlert from './ChatPausedAlert';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ChatHeader } from './ChatHeader';
import StarField from './chat-animations/StarField';
import UFO from './chat-animations/UFO';
import useDynamicGradientColor from '../../hooks/useDynamicGradient';
type ChatProps = {
  onClick: () => void;
  height: number;
  defaultHeight: number;
  width: number;
  defaultWidth: number;
};

const Chat = ({
  onClick,
  height,
  defaultHeight,
  width,
  defaultWidth,
}: ChatProps) => { // Use the useChatContext hook to access context values
  const messages = useSelector((state: RootState) => state.messages);
  const { chatMessagesBoxRef, isLiveModeEnabled, scrollNewMessages } =
    useChatLiveModeScrolling<HTMLDivElement>(messages);

  const { getGradient } = useThemeMapping(); // Destructure the hook to get the getGradient function
  const currentGradient = useDynamicGradientColor();
  const flexRef = useRef<HTMLDivElement>(null);
  return (
    <Flex direction="column" w="inherit" h="inherit">
      {/* <ChatHeader
        onClick={onClick}
        height={height}
        width={width}
        defaultHeight={defaultHeight}
        defaultWidth={defaultWidth}
      /> */}
      <Flex
        ref={flexRef}
        pos="relative" // Use the dynamically retrieved gradient
        justify="flex-end"
        direction="column"
        w="inherit"
        h="100%"
        p="20px"
        bgGradient={currentGradient}
        border="3px solid"
        borderColor={baseTheme.colors.brown}
        borderTop="none"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex="1" // Ensure the chat effects container is on top
          overflow="hidden" // Hide any overflow from chat effects
        >
          <StarField numStars={100} />
          <UFO />
        </Box>
        <ChatMessagesBox ref={chatMessagesBoxRef} messages={messages} />
        {!isLiveModeEnabled && (
          <ChatPausedAlert
            onClick={scrollNewMessages}
          />
        )}
        {/* <SendMessageForm onSend={send} /> */}
      </Flex>
    </Flex>
  );
};

/* eslint-disable */
const ChatMessagesBox = React.forwardRef<
  HTMLDivElement,
  { messages: MessageModel[]; }
>(({ messages }, ref) => {
  const MessageList = messages.map((message) => (
    <ChatMessage key={message.msgId} message={message} />
  ))

  return (
    <Box ref={ref} overflow="auto" mt="4" px="10px" pb="10px" maxH="70vh">
      {MessageList}
    </Box>
  );
});
/* eslint-enable */

export default Chat;
