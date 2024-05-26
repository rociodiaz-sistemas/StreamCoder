import React, { createContext, useContext, ReactNode } from 'react';

type ChatContextType = {
  fontSize: string;
  defaultHeight: string;
  // Add other dynamic variables here (e.g., height)
};

const initialChatContext: ChatContextType = {
  fontSize: '16px',
  // Add initial values for other dynamic variables here
};

const ChatContext = createContext<ChatContextType>(initialChatContext); // Set default value here

type ChatContextProviderProps = {
  children: ReactNode;
};

export const ChatContextProvider: React.FC<ChatContextProviderProps> = ({ children }) => {
  // No need to accept a value prop since the initial value is set in the context
  return <ChatContext.Provider value={initialChatContext}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatContextProvider');
  }
  return context;
};