import { Author, Badge, Emote, MessageModel } from "../utils/models"

export function formatTwitchChatMessage(rawData: any): MessageModel {
    const formattedType: MessageModel['type'] = rawData.type === 'subscriber' ? 'subscriber' : rawData.type === 'bit' ? 'bit' : rawData.type === 'highlighted' ? 'highlighted' : rawData.type === 'vip' ? 'vip' : 'common';
    return {
        msgId: rawData.id,
        author: {
            userId: rawData.userId,
            color: rawData.color,
            displayName: rawData.displayName,
            username: rawData.username,
            role: rawData.role,
            badges: rawData.badges as Badge[],
            monthsSuscribed: rawData.monthsSuscribed
        } as Author,
        content: rawData.message,
        firstMessage: rawData.firstMessage,
        isHighlighted: rawData.isHighlighted,
        isReply: rawData.isReply,
        hasBits: rawData.hasBits,
        bits: rawData.bits,
        emotes: rawData.emotes as Emote[],
        type: formattedType,
    };
}