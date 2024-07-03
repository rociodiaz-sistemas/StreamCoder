import { useCallback, useEffect, useRef, useState } from 'react';
import { MessageModel } from '../utils/models';

export default function useChatLiveModeScrolling<T extends HTMLElement>(
  messages: MessageModel[],
) {
  const [isLiveModeEnabled, setIsLiveModeEnabled] = useState(true);
  const chatMessagesBoxRef = useRef<T | null>(null);

  const scrollNewMessages = useCallback(() => {
    if (chatMessagesBoxRef.current) {
      // Scroll to the bottom directly
      chatMessagesBoxRef.current.scrollTop =
        chatMessagesBoxRef.current.scrollHeight;
    }
  }, []);

  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const toggleLiveModeOnChatScroll = useCallback(
    debounce(() => {
      if (chatMessagesBoxRef.current) {
        const scrollHeight = chatMessagesBoxRef.current.scrollHeight;
        const scrollTop = chatMessagesBoxRef.current.scrollTop;
        const clientHeight = chatMessagesBoxRef.current.clientHeight;

        // Improved scroll calculation to handle potential rendering issues
        const currentScroll = Math.round(clientHeight + scrollTop);
        const isChatScrolled =
          currentScroll < scrollHeight - 1 || currentScroll > scrollHeight + 1;

        setIsLiveModeEnabled(!isChatScrolled);
      }
    }, 100),
    [],
  );

  useEffect(() => {
    const ref = chatMessagesBoxRef.current;
    if (ref) {
      ref.addEventListener('scroll', toggleLiveModeOnChatScroll);
      return () =>
        ref.removeEventListener('scroll', toggleLiveModeOnChatScroll);
    }
  }, [toggleLiveModeOnChatScroll]);

  useEffect(() => {
    if (isLiveModeEnabled) {
      scrollNewMessages();
    }
  }, [messages, isLiveModeEnabled, scrollNewMessages]);

  return {
    chatMessagesBoxRef,
    isLiveModeEnabled,
    scrollNewMessages,
  };
}
