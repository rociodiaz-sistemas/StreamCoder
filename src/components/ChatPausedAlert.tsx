import { useState } from 'react'
import { GiPauseButton } from 'react-icons/gi'
import { ImArrowDown2 } from 'react-icons/im'

const ChatPausedAlert = ({
  onClick: handleClick,
  className,
}: {
  onClick: () => void
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const label = isHovered ? (
    <span >
      <ImArrowDown2 />
      See new messages
    </span>
  ) : (
    <span className="inline-flex items-center">
      <GiPauseButton />
      Chat paused due to scroll
    </span>
  )

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={className}
    >
      {label}
    </div>
  )
}

export default ChatPausedAlert
