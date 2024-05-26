import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import useChatLiveModeScrolling from '../hooks/useChatLiveModeScrolling';
import useThemeMapping from '../hooks/useThemeMapping';
import { MessageModel } from '../utils/models';
import baseTheme from '../themes/baseTheme';
import ChatMessage from './ChatMessage';
import { ChatHeader } from './ChatHeader';
import ChatPausedAlert from './ChatPausedAlert';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
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

  return (
    <Flex direction="column" w="inherit" h="inherit">
      <ChatHeader
        onClick={onClick}
        height={height}
        width={width}
        defaultHeight={defaultHeight}
        defaultWidth={defaultWidth}
      />
      <Flex
        pos="relative" // Use the dynamically retrieved gradient
        justify="flex-end"
        direction="column"
        w="inherit"
        h="100%"
        p="20px"
        bgGradient={getGradient()}
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
