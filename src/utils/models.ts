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

export type MessageType = 'common' | 'highlighted' | 'bits';

export enum Role {
  Viewer = 1,
  Vip = 2,
  Moderator = 3,
  Broadcaster = 4,
}

export type RoleObject = {
  id: Role;
  name: 'Viewer' | 'Vip' | 'Moderator' | 'Broadcaster';
};

export type Roles = RoleObject[];

export interface Author {
  userId: string;
  color: string;
  displayName: string;
  username: string;
  roles: Roles;
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
