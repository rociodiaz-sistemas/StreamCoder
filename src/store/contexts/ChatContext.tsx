import React, { createContext, useContext, ReactNode, useState } from 'react';

type ChatContextType = {
  fontSize: string;
  windowSize: { width: number; height: number }; // Include window size in context type
  setFontSize: (fontSize: string) => void;
  setWindowSize: (windowSize: { width: number; height: number }) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState('1em');
  const [windowSize, setWindowSize] = useState({ width: 400, height: 450 });

  const value: ChatContextType = {
    fontSize,
    windowSize,
    setFontSize,
    setWindowSize,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatContextProvider');
  }
  return context;
};
