export const CHAT_RECEIVE_MESSAGE = 'CHAT_RECEIVE_MESSAGE';

export interface ChatReceiveMessageAction {
  type: typeof CHAT_RECEIVE_MESSAGE;
  payload: {
    message: string;
    sender: string;
  };
}

export const receiveChatMessage = (
  message: string,
  sender: string,
): ChatReceiveMessageAction => ({
  type: CHAT_RECEIVE_MESSAGE,
  payload: { message, sender },
});
