import {
  call,
  put,
  takeEvery,
  take,
  fork,
  ForkEffect,
  CallEffect,
  PutEffect,
  TakeEffect,
} from 'redux-saga/effects';
import { eventChannel, EventChannel } from 'redux-saga';
import {
  CONNECT_WEBSOCKET,
  websocketConnected,
} from '../actions/websocketActions'; // Import your action types and action creators
import { StreamerbotClient } from '@streamerbot/client'; // Import your WebSocket client
import OBSWebSocket from 'obs-websocket-js'; // Import OBSWebSocket client
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

// OBS WebSocket event type
interface ObsWebSocketEvent {
  // Define properties based on the events you expect from OBS WebSocket
  [key: string]: any;
}

// Function to create a WebSocket connection
function createWebSocketConnection(subscribe: {
  [key: string]: string[];
}): EventChannel<WebSocketEvent> {
  return eventChannel((emit) => {
    const client = new StreamerbotClient({
      subscribe,
      onData: (data: any) => {
        emit(data);
      },
    });

    return () => {
      client.disconnect();
    };
  });
}

function createObsWebSocketConnection(): EventChannel<ObsWebSocketEvent> {
  return eventChannel((emit) => {
    const obs = new OBSWebSocket();
    // Connect to OBS WebSocket
    obs
      .connect('ws://localhost:4455', 'your_password') // Pass URL and password as separate arguments
      .then(() => {
        console.log('Connected to OBS WebSocket');
      })
      .catch((error) => {
        console.error('Failed to connect to OBS WebSocket', error);
      });

    // Listen for specific events
    const onEvent = (data: ObsWebSocketEvent) => {
      emit(data);
    };

    // obs.on('SceneChanged', onEvent); // Example event type; replace with actual events you need
    // obs.on('SourceStatusChanged', onEvent); // Example event type; replace with actual events you need

    return () => {
      obs.disconnect();
    };
  });
}

// Handler for Twitch events
function* handleTwitchEvent(
  eventType: string,
  eventData: any,
): Generator<PutEffect> {
  switch (eventType) {
    case 'ChatMessage': {
      const formattedMessage: MessageModel = formatTwitchChatMessage(
        eventData.message,
      );
      yield put(receiveMessage(formattedMessage));
      break;
    }
    // Handle other Twitch event types here
    default:
      break;
  }
}

// Handler for YouTube events
function* handleYouTubeEvent(
  eventType: string,
  eventData: any,
): Generator<PutEffect> {
  switch (eventType) {
    case 'SuperChat': {
      // Example: handle YouTube SuperChat event
      console.log('YouTube SuperChat:', eventData);
      break;
    }
    // Handle other YouTube event types here
    default:
      break;
  }
}

// Handler for OBS events
function* handleObsEvent(event: ObsWebSocketEvent): Generator<PutEffect> {
  // Example: handle OBS WebSocket events
  console.log('OBS WebSocket event:', event);
  // Add your specific handling logic for OBS WebSocket events here
  return; // Adjust this if you have specific effects or actions to yield
}

// Function to handle WebSocket data
function* handleWebSocketData(
  data: WebSocketEvent,
): Generator<CallEffect | PutEffect> {
  const { event, data: eventData } = data;
  if (event) {
    const { source, type } = event;
    if (source === 'Twitch') {
      yield call(handleTwitchEvent, type, eventData);
    } else if (source === 'YouTube') {
      yield call(handleYouTubeEvent, type, eventData);
    }
    // Add more sources here if needed
  }
}

// Watcher saga for Twitch WebSocket connection
function* watchTwitchWebSocketConnection(): Generator<
  ForkEffect | CallEffect | PutEffect | TakeEffect
> {
  yield takeEvery(CONNECT_WEBSOCKET, function* () {
    const channel: EventChannel<WebSocketEvent> = yield call(
      createWebSocketConnection,
      { Twitch: ['ChatMessage', 'Follow'] },
    );
    yield put(websocketConnected());
    while (true) {
      const data: WebSocketEvent = yield take(channel);
      yield call(handleWebSocketData, data);
    }
  });
}

// Watcher saga for YouTube WebSocket connection
function* watchYouTubeWebSocketConnection(): Generator<
  ForkEffect | CallEffect | PutEffect | TakeEffect
> {
  yield takeEvery(CONNECT_WEBSOCKET, function* () {
    const channel: EventChannel<WebSocketEvent> = yield call(
      createWebSocketConnection,
      { YouTube: ['SuperChat', 'Subscription'] }, // Example events
    );
    yield put(websocketConnected());
    while (true) {
      const data: WebSocketEvent = yield take(channel);
      yield call(handleWebSocketData, data);
    }
  });
}

// Watcher saga for OBS WebSocket connection
function* watchObsWebSocketConnection(): Generator<
  ForkEffect | CallEffect | PutEffect | TakeEffect
> {
  yield takeEvery(CONNECT_WEBSOCKET, function* () {
    const channel: EventChannel<ObsWebSocketEvent> = yield call(
      createObsWebSocketConnection,
    );
    yield put(websocketConnected());
    while (true) {
      const data: ObsWebSocketEvent = yield take(channel);
      yield call(handleObsEvent, data);
    }
  });
}

// Root saga
export default function* websocketSaga(): Generator<ForkEffect> {
  yield fork(watchTwitchWebSocketConnection);
  yield fork(watchYouTubeWebSocketConnection);
  yield fork(watchObsWebSocketConnection);
}
