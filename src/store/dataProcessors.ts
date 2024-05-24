import { Author, Badge, Emote, MessageModel } from "../utils/models"

export function formatTwitchChatMessage(rawData: any): MessageModel {
    const formattedType: MessageModel['type'] = rawData.type === 'subscriber' ? 'subscriber' : rawData.type === 'bit' ? 'bit' : rawData.type === 'highlighted' ? 'highlighted' : rawData.type === 'vip' ? 'vip' : 'common';
    const hasEmotes: boolean = Array.isArray(rawData.emotes) && rawData.emotes.length > 0; // Check if emotes array exists and is not empty
    let contentWithEmotes: string = rawData.message;

    if (hasEmotes) {
        contentWithEmotes = insertEmotes(rawData.message, rawData.emotes || []); // Insert emotes into the content
    }

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
        content: `<p style="display:flex; word-break:break-all; ">${contentWithEmotes}</p>`,
        firstMessage: rawData.firstMessage,
        isHighlighted: rawData.isHighlighted,
        isReply: rawData.isReply,
        hasBits: rawData.hasBits,
        bits: rawData.bits,
        hasEmotes: hasEmotes,
        emotes: rawData.emotes as Emote[],
        type: formattedType,
    };
}

function insertEmotes(content: string, emotes: Emote[]): string {
    // Sort emotes by start index in descending order for efficient insertion
    const sortedEmotes: Emote[] = emotes.sort((a, b) => b.startIndex - a.startIndex);

    // Replace each emote placeholder with the corresponding image tag
    sortedEmotes.forEach((emote) => {
        const { startIndex, endIndex, imageUrl } = emote;
        const emoteString = `<img src="${imageUrl}" alt="${emote.name}">`;
        content = content.substring(0, startIndex) + emoteString + content.substring(endIndex + 1);
    });

    return content;
}