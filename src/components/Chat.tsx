import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { FixedSizeList as List } from 'react-window';

import useChatLiveModeScrolling from '../hooks/useChatLiveModeScrolling';
import useThemeMapping from '../hooks/useThemeMapping';
import useChatMessages from '../hooks/useChatMessages';
import { MessageModel } from '../utils/models';
import baseTheme from '../themes/baseTheme';

import ChatMessage from './ChatMessage';
import { ChatHeader } from './ChatHeader';
import ChatPausedAlert from './ChatPausedAlert';
import SendMessageForm from './SendMessageForm';

type ChatProps = {
  fontSize: string;
  onClick: () => void;
  height: number;
  defaultHeight: number;
  width: number;
  defaultWidth: number;
};

type RenderMessageProps = {
  index: number;
  style: React.CSSProperties;
  data: { messages: MessageModel[]; fontSize: string };
};

const Chat = ({
  fontSize,
  onClick,
  height,
  defaultHeight,
  width,
  defaultWidth,
}: ChatProps) => {
  const { messages, send } = useChatMessages();
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
        <ChatMessagesBox
          ref={chatMessagesBoxRef}
          messages={messages}
          fontSize={fontSize}
        />
        {!isLiveModeEnabled && <ChatPausedAlert onClick={scrollNewMessages} />}
        <SendMessageForm onSend={send} fontSize={fontSize} />
      </Flex>
    </Flex>
  );
};

/* eslint-disable */
const ChatMessagesBox = React.forwardRef<
  HTMLDivElement,
  { messages: MessageModel[]; fontSize: string }
>(({ messages, fontSize }, ref) => {
  const renderMessage = ({ index, style, data }: RenderMessageProps) => {
    const message = messages[index];
    return (
      <div style={style}>
        <ChatMessage key={message.id} message={message} fontSize={fontSize} />
      </div>
    );
  };

  return (
    <Box ref={ref} overflow="auto" mt="4" px="10px" pb="10px" maxH="70vh">
      <List
        className="List"
        height={700}
        itemCount={messages.length}
        itemSize={35}
        width={300}
      >
        {renderMessage}
      </List>
    </Box>
  );
});
/* eslint-enable */

export default Chat;
