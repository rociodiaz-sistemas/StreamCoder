// Action Types
export const EFFECT_RECEIVE_TWITCH_FOLLOW = 'EFFECT_RECEIVE_TWITCH_FOLLOW';
export const EFFECT_RECEIVE_TWITCH_SUB = 'EFFECT_RECEIVE_TWITCH_SUB';
export const EFFECT_RECEIVE_TWITCH_RESUB = 'EFFECT_RECEIVE_TWITCH_RESUB';
export const EFFECT_RECEIVE_TWITCH_FIRSTMESSAGE =
  'EFFECT_RECEIVE_TWITCH_FIRSTMESSAGE';

// Action Interfaces
interface ReceiveTwitchFollowAction {
  type: typeof EFFECT_RECEIVE_TWITCH_FOLLOW;
  payload: any;
}

interface ReceiveTwitchSubAction {
  type: typeof EFFECT_RECEIVE_TWITCH_SUB;
  payload: any;
}

interface ReceiveTwitchResubAction {
  type: typeof EFFECT_RECEIVE_TWITCH_RESUB;
  payload: any;
}

interface ReceiveTwitchFirstMessageAction {
  type: typeof EFFECT_RECEIVE_TWITCH_FIRSTMESSAGE;
  payload: any;
}

// Union Action Types
export type EffectsActionTypes =
  | ReceiveTwitchFollowAction
  | ReceiveTwitchSubAction
  | ReceiveTwitchResubAction
  | ReceiveTwitchFirstMessageAction;

// Action Creators
export const receiveTwitchFollow = (data: any): ReceiveTwitchFollowAction => ({
  type: EFFECT_RECEIVE_TWITCH_FOLLOW,
  payload: data,
});

export const receiveTwitchSub = (data: any): ReceiveTwitchSubAction => ({
  type: EFFECT_RECEIVE_TWITCH_SUB,
  payload: data,
});

export const receiveTwitchResub = (data: any): ReceiveTwitchResubAction => ({
  type: EFFECT_RECEIVE_TWITCH_RESUB,
  payload: data,
});

export const receiveTwitchFirstMessage = (
  data: any,
): ReceiveTwitchFirstMessageAction => ({
  type: EFFECT_RECEIVE_TWITCH_FIRSTMESSAGE,
  payload: data,
});
