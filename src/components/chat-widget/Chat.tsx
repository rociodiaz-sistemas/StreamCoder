import React, { useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import useChatLiveModeScrolling from '../../hooks/useChatLiveModeScrolling';
import { MessageModel } from '../../utils/models';
import baseTheme from '../../themes/baseTheme';
import ChatMessage from './chat-message/ChatMessage';
import ChatPausedAlert from './ChatPausedAlert';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ChatHeader } from './ChatHeader';
import StarField from './chat-animations/StarField';
import useDynamicGradientColor from '../../hooks/useDynamicGradient';
import UFOComponent from './chat-animations/UFO';


type ChatProps = {
  onClick: () => void;
  height: number;
  defaultHeight: number;
  width: number;
  defaultWidth: number;
};


const MemoizedStarField = React.memo(StarField);

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
  const currentGradient = useDynamicGradientColor();
  return (
    <Flex pos="relative" direction="column" w="inherit" h="inherit">
      {/* <ChatHeader
        onClick={onClick}
        height={height}
        width={width}
        defaultHeight={defaultHeight}
        defaultWidth={defaultWidth}
      /> */}

      <Box
        position="absolute"
        width="100%"
        height="100%"
        zIndex="0" // Ensure the chat effects container is on top
        overflow="hidden" // Hide any overflow from chat effects
        bgGradient={currentGradient}
      >
        <MemoizedStarField numStars={100} />
        <UFOComponent />
      </Box>

      <Flex
        justify="flex-end"
        direction="column"
        w="inherit"
        h="100%"
        p="20px"
        position="absolute"
        zIndex={1}
        border="3px solid"
        borderColor={baseTheme.colors.brown}
        borderTop="none"
      >
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
