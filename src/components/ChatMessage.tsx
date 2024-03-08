import { Box } from '@chakra-ui/react'
import useThemeMapping from '../hooks/useThemeMapping'
import { MessageModel } from '../utils/models'

type MessageProps = {
  message: MessageModel
} & React.ComponentPropsWithRef<'div'>

const ChatMessage = ({
  message: { author, content },
  className,
}: MessageProps) => {
  const themeInfo = useThemeMapping() // Use the useThemeMapping hook
  const Badges = author.badges.map((bg, i) => (
    <img
      key={i}
      src={`/badges/${bg}.png`}
      className="mr-2 w-4 h-4 self-center"
    />
  ))

  const Username = (
    <span className="font-semibold" style={{ color: author.rgbColor }}>
      {author.username}
    </span>
  )

  const messageBoxStyle = themeInfo.getMessageBoxStyles('common') || {}

  return (
    <Box
      borderColor={messageBoxStyle.borderColor}
      bg={messageBoxStyle.background}
      borderWidth="1px"
      borderRadius="12px"
      padding="11"
      width="fit-content"
      className={`text-[15px] py-1 px-2 rounded hover:bg-gray-500/30 leading-6 ${className}`}
    >
      <div className="inline-flex items-baseline">
        {Badges}
        {Username}
      </div>
      <span className="ml-3 break-words">{content}</span>
    </Box>
  )
}

export default ChatMessage
