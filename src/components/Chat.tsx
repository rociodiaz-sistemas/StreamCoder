import React from 'react'
import useChatLiveModeScrolling from '../hooks/useChatLiveModeScrolling'
import useChatMessages from '../hooks/useChatMessages'
import { MessageModel } from '../utils/models'
import ChatMessage from './ChatMessage'
import ChatPausedAlert from './ChatPausedAlert'
import SendMessageForm from './SendMessageForm'
import { Box } from '@chakra-ui/react'
import useThemeMapping from '../hooks/useThemeMapping'

const Chat = () => {
  const { messages, send } = useChatMessages()
  const { chatMessagesBoxRef, isLiveModeEnabled, scrollNewMessages } =
    useChatLiveModeScrolling<HTMLDivElement>(messages)
  const { messages, send } = useChatMessages()
  const { chatMessagesBoxRef, isLiveModeEnabled, scrollNewMessages } =
    useChatLiveModeScrolling<HTMLDivElement>(messages)

  const { getGradient } = useThemeMapping() // Destructure the hook to get the getGradient function
  const { getGradient } = useThemeMapping() // Destructure the hook to get the getGradient function

  return (
    <Box
      as="div"
      bgGradient={getGradient()} // Use the dynamically retrieved gradient
      padding="20px"
      maxWidth="400px"
      minHeight="500px"
      display="flex"
      position="relative"
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <ChatMessagesBox ref={chatMessagesBoxRef} messages={messages} />
      {!isLiveModeEnabled && (
        <ChatPausedAlert
          onClick={scrollNewMessages}
          className="absolute inset-x-0 bottom-28 mx-auto"
        />
      )}
      <SendMessageForm onSend={send} className="mt-4" />
    </Box>
  )
}

/* eslint-disable */
const ChatMessagesBox = React.forwardRef <
  HTMLDivElement,
  { messages: MessageModel[] }
HTMLDivElement,
  { messages: MessageModel[] }
  > (({ messages }, ref) => {
    const MessageList = messages.map((message) => (
      <ChatMessage key={message.id} className="mb-1 mt-4" message={message} />
    ))

    return (
      <Box
        as="div"
        ref={ref}
        marginTop="4"
        overflow="auto"
        maxHeight="70vh"
      >
        {MessageList}
      </Box>
    )
  })
/* eslint-enable */

export default Chat
