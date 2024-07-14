import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import useChatLiveModeScrolling from '../../hooks/useChatLiveModeScrolling';
import { MessageModel } from '../../utils/models';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ChatPausedAlert from '../chat-widget/ChatPausedAlert';
import ChatMessage from '../chat-widget/chat-message/ChatMessage';

export type ChatProps = {
  onClick: () => void;
  height: number;
  defaultHeight: number;
  width: number;
  defaultWidth: number;
};

const OnlyMessagesChat = ({
  onClick,
  height,
  defaultHeight,
  width,
  defaultWidth,
}: ChatProps) => {
  // Use the useChatContext hook to access context values
  const messages = useSelector((state: RootState) => state.messages);
  const { chatMessagesBoxRef, isLiveModeEnabled, scrollNewMessages } =
    useChatLiveModeScrolling<HTMLDivElement>(messages);

  return (
    <Flex pos="relative" direction="column" w="inherit" h="inherit">
      <Flex
        pos="absolute"
        zIndex={1}
        justify="flex-end"
        direction="column"
        w="inherit"
        h="100%"
        p="20px"
        borderTop="none"
      >
        <ChatMessagesBox ref={chatMessagesBoxRef} messages={messages} />
        {!isLiveModeEnabled && <ChatPausedAlert onClick={scrollNewMessages} />}
        {/* <SendMessageForm onSend={send} /> */}
      </Flex>
    </Flex>
  );
};

/* eslint-disable */
const ChatMessagesBox = React.forwardRef<
  HTMLDivElement,
  { messages: MessageModel[] }
>(({ messages }, ref) => {
  const MessageList = messages.map((message) => (
    <ChatMessage key={message.msgId} message={message} />
  ));

  return (
    <Box ref={ref} overflow="hidden" mt="4" px="10px" pb="10px" maxH="70vh">
      {MessageList}
    </Box>
  );
});
/* eslint-enable */

export default OnlyMessagesChat;
