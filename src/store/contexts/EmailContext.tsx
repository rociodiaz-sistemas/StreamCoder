// src/contexts/EmailContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Email {
  id: string;
  sender: string;
  text: string;
  timestamp: number;
  isRead: boolean;
  isFavorite: boolean;
}

interface EmailContextType {
  selectedEmail: Email | null;
  setSelectedEmail: (email: Email | null) => void;
  // Add other context methods or state as needed
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export const EmailProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  return (
    <EmailContext.Provider value={{ selectedEmail, setSelectedEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmailContext = (): EmailContextType => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error('useEmailContext must be used within an EmailProvider');
  }
  return context;
};
