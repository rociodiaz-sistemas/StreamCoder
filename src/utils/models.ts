export interface MessageModel {
  id: string;
  author: Author;
  content: string;
}

export interface Author {
  id: string;
  rgbColor: string;
  username: string;
  type: 'common' | 'subscriber' | 'bit' | 'highlighted' | 'vip';
  badges: Badge[];
}

export type Badge = 'moderator' | 'vip' | 'prime' | 'turbo';
