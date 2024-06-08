import afternoonTheme from "../themes/afternoonTheme";
import dayTheme from "../themes/dayTheme";
import morningTheme from "../themes/morningTheme";
import theme from "../themes/theme";

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
  role: Role;
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
// Define a union type for all possible theme objects
export type ThemeType = typeof morningTheme | typeof dayTheme | typeof afternoonTheme | typeof theme;