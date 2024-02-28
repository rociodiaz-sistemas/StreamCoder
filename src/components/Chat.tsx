import React from 'react'
import useChatLiveModeScrolling from '../hooks/useChatLiveModeScrolling'
import useChatMessages from '../hooks/useChatMessages'
import { MessageModel } from '../utils/models'
import ChatMessage from './ChatMessage'
import ChatPausedAlert from './ChatPausedAlert'
import SendMessageForm from './SendMessageForm'
import { Box } from '@chakra-ui/react'
import useGradientMapping from '../hooks/useGradientMapping' // Import the hook

const Chat = () => {
    const { messages, send } = useChatMessages()
    const { chatMessagesBoxRef, isLiveModeEnabled, scrollNewMessages } =
        useChatLiveModeScrolling<HTMLDivElement>(messages)

    const { getGradient } = useGradientMapping() // Destructure the hook to get the getGradient function

    return (
        <Box
            as="div"
            bgGradient={getGradient()} // Use the dynamically retrieved gradient
            className="relative w-full max-w-[550px] px-4 py-3 rounded-lg bg-slate-900 opacity-80"
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

const ChatMessagesBox = React.forwardRef<
    HTMLDivElement,
    { messages: MessageModel[] }
>(({ messages }, ref) => {
    const MessageList = messages.map((message) => (
        <ChatMessage key={message.id} className="mb-1" message={message} />
    ))

    return (
        <div ref={ref} className="h-[70vh] overflow-auto">
            {MessageList}
        </div>
    )
})

export default Chat
