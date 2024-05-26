import { AnimatePresence, motion, useAnimation } from "framer-motion";
import useThemeMapping from '../hooks/useThemeMapping';
import { MessageModel } from '../utils/models';
import Highlighter from '../assets/highlighter.svg';
import { useState } from 'react';
import MessageBox from "./ChatMessage/MessageBox";
import { MessageContent } from "./ChatMessage/MessageContent";

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
