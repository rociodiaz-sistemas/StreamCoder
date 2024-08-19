import { call, put, take, fork, takeEvery } from 'redux-saga/effects';
import { eventChannel, EventChannel } from 'redux-saga';
import { StreamerbotClient } from '@streamerbot/client';
import {
  EFFECT_RECEIVE_TWITCH_FOLLOW,
  EFFECT_RECEIVE_TWITCH_SUB,
  EFFECT_RECEIVE_TWITCH_RESUB,
  EFFECT_RECEIVE_TWITCH_FIRSTMESSAGE,
  receiveTwitchFollow,
  receiveTwitchSub,
  receiveTwitchResub,
  receiveTwitchFirstMessage,
} from '../actions/effectsActions';

// WebSocket event type
interface WebSocketEvent {
  event: {
    source: string;
    type: string;
  };
  data: any;
}

// Function to create a WebSocket connection for effects
function createEffectsWebSocketConnection(subscribe: {
  [key: string]: string[];
}): EventChannel<WebSocketEvent> {
  return eventChannel((emit) => {
    const client = new StreamerbotClient({
      subscribe,
      onData: (data: any) => {
        emit(data);
      },
    });

    // Clean up the WebSocket connection on channel close
    return () => {
      client.disconnect();
    };
  });
}

// Handler for Twitch effects events
function* handleTwitchEffectsEvent(eventData: any): Generator<any, void, any> {
  switch (eventData.eventType) {
    case 'Follow':
      yield put(receiveTwitchFollow(eventData.data));
      break;
    case 'Sub':
      yield put(receiveTwitchSub(eventData.data));
      break;
    case 'ReSub':
      yield put(receiveTwitchResub(eventData.data));
      break;
    case 'FirstWord':
      yield put(receiveTwitchFirstMessage(eventData.data));
      break;
    default:
      console.error('Unknown event type:', eventData.eventType);
  }
}

// Function to handle WebSocket data
function* handleWebSocketData(data: WebSocketEvent): Generator<any, void, any> {
  const { event, data: eventData } = data;
  if (event && event.source === 'Twitch') {
    yield call(handleTwitchEffectsEvent, eventData);
  }
}

// Watcher saga for Twitch effects WebSocket connection
function* watchTwitchEffectsWebSocketConnection(): Generator<any, void, any> {
  const channel = yield call(createEffectsWebSocketConnection, {
    Twitch: ['Follow', 'Sub', 'ReSub', 'FirstWord'],
  });

  while (true) {
    const data: WebSocketEvent = yield take(channel);
    yield call(handleWebSocketData, data);
  }
}

// Root saga for effects-related WebSocket functionality
export default function* effectsSaga(): Generator<any, void, any> {
  yield fork(watchTwitchEffectsWebSocketConnection);
}
