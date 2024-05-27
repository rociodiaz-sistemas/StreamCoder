import { MessageModel } from '../../../utils/models';
import MessageBox from "./MessageBox";
import { MessageContent } from "./MessageContent";

type MessageProps = {
  message: MessageModel;
} & React.ComponentPropsWithRef<'div'>;

const ChatMessage = ({
  message
}: MessageProps) => {

  return (
    <MessageBox messageType={message.type}>
      <MessageContent message={message} />
    </MessageBox>
  );
};

export default ChatMessage;
