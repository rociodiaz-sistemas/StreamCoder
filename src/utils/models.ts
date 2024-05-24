export interface MessageModel {
  msgId: string;
  author: Author;
  content: string;
  firstMessage: boolean;
  isHighlighted: boolean;
  isReply: boolean;
  hasBits: boolean;
  bits: number;
  emotes: Emote[];
  type: 'common' | 'subscriber' | 'bit' | 'highlighted' | 'vip';
}

export interface Author {
  userId: string;
  color: string;
  displayName: string;
  username: string;
  role: number;
  badges: Badge[];
  monthsSuscribed: number;
}

export interface Emote {
  endIndex: number;
  id: string;
  imageUrl: string;
  name: string;
  startIndex: number;
  type: string;
}

export interface Badge {
  imageUrl: string;
  name: string;
  version: number;
}

//TBD: CHEER EMOTES
