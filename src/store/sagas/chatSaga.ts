import {
  call,
  put,
  take,
  fork,
  takeEvery,
  ForkEffect,
  CallEffect,
  PutEffect,
  TakeEffect,
} from 'redux-saga/effects';
import { eventChannel, EventChannel } from 'redux-saga';
import {
  CONNECT_WEBSOCKET,
  websocketConnected,
} from '../actions/websocketActions';
import { StreamerbotClient } from '@streamerbot/client';
import { formatTwitchChatMessage } from '../dataProcessors';
import { receiveMessage } from '../slices/messageSlice';
import { MessageModel } from '../../utils/models';

// WebSocket event type
interface WebSocketEvent {
  event: {
    source: string;
    type: string;
  };
  data: any;
}

// Function to create a WebSocket connection specifically for chat
function createChatWebSocketConnection(subscribe: {
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

// Handler for Twitch chat events
function* handleTwitchChatEvent(eventData: any): Generator<PutEffect> {
  const formattedMessage: MessageModel = formatTwitchChatMessage(
    eventData.message,
  );
  yield put(receiveMessage(formattedMessage));
}

// Function to handle WebSocket data
function* handleWebSocketData(
  data: WebSocketEvent,
): Generator<CallEffect | PutEffect> {
  const { event, data: eventData } = data;
  if (event && event.source === 'Twitch' && event.type === 'ChatMessage') {
    yield call(handleTwitchChatEvent, eventData);
  }
}

// Watcher saga for Twitch chat WebSocket connection
function* watchTwitchChatWebSocketConnection(): Generator<
  ForkEffect | CallEffect | PutEffect | TakeEffect
> {
  yield takeEvery(CONNECT_WEBSOCKET, function* () {
    const channel: EventChannel<WebSocketEvent> = yield call(
      createChatWebSocketConnection,
      { Twitch: ['ChatMessage'] },
    );
    yield put(websocketConnected());
    while (true) {
      const data: WebSocketEvent = yield take(channel);
      yield call(handleWebSocketData, data);
    }
  });
}

// Root saga for chat-related WebSocket functionality
export default function* chatSaga(): Generator<ForkEffect> {
  yield fork(watchTwitchChatWebSocketConnection);
}
