export interface MessageModel {
  msgId: string;
  author: Author;
  content: string;
  firstMessage: boolean;
  isHighlighted: boolean;
  suscriber: boolean;
  isReply: boolean;
  hasBits: boolean;
  bits: number;
  hasEmotes: boolean;
  emotes: Emote[];
  type: MessageType;
}

export type Role = { 1: "Viewer", 2: "Vip", 3: "Moderator", 4: "Broadcaster" };
export type MessageType = "common" | "highlighted" | "bits";

export interface Author {
  userId: string;
  color: string;
  displayName: string;
  username: string;
  role: string;
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

export interface MessageBoxStyle {
  borderColor?: string;
  background?: string;
  backgroundGradient?: string;
  gifBackground?: string;
  boxShadow?: string;
}

//TBD: CHEER EMOTES
