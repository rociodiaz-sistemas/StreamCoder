import React from 'react';
import { Box, Flex, background } from '@chakra-ui/react';
import { FixedSizeList as List } from 'react-window';
import useChatLiveModeScrolling from '../../hooks/useChatLiveModeScrolling';
import useThemeMapping from '../../hooks/useThemeMapping';
import { MessageModel } from '../../utils/models';
import baseTheme from '../../themes/baseTheme';
import ChatMessage from './chat-message/ChatMessage';
import ChatPausedAlert from './ChatPausedAlert';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ChatHeader } from './ChatHeader';

type ChatProps = {
  onClick: () => void;
  height: number;
  defaultHeight: number;
  width: number;
  defaultWidth: number;
};

type RenderMessageProps = {
  index: number;
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
  const renderMessage = ({ index }: RenderMessageProps) => {
    const message = messages[index];
    return (
      <ChatMessage key={message.msgId} message={message} />
    );
  };

  return (
    // <Box ref={ref} maxH="70vh">
    <List
      className="List"
      height={400}
      itemCount={messages.length}
      itemSize={100}
      maxWidth={700}
      style={{ backgroundColor: 'red' }}
      outerRef={ref}
    >
      {renderMessage}
    </List>
    // </Box>
  );
});
/* eslint-enable */

export default Chat;
