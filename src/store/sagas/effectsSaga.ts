// sagas/effectsSaga.ts
import { call, put, take, fork } from 'redux-saga/effects';
import { eventChannel, EventChannel } from 'redux-saga';
import { StreamerbotClient } from '@streamerbot/client';
import { addFirefly, triggerMoneyRain } from '../slices/effectsSlice'; // Import actions from the slice

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

    console.log('Effects saga connected');
    // Clean up the WebSocket connection on channel close
    return () => {
      client.disconnect();
    };
  });
}

// Utility function to generate a random number within a range
const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

// Handler for Twitch effects events
function* handleTwitchEffectsEvent(eventType: any): Generator<any, void, any> {
  switch (eventType) {
    case 'Follow':
      // Add a firefly for follows
      yield put(
        addFirefly({
          id: Date.now(), // Generate a unique ID or use another method
          top: Math.random() * 100,
          left: Math.random() * 100,
          opacity: getRandom(0.5, 1),
        }),
      );
      break;
    case 'Sub':
      // Add a firefly for subs
      yield put(
        addFirefly({
          id: Date.now(),
          top: Math.random() * 100,
          left: Math.random() * 100,
          opacity: getRandom(0.5, 1),
        }),
      );
      break;
    case 'ReSub':
      // Add a firefly for resubs
      yield put(
        addFirefly({
          id: Date.now(),
          top: Math.random() * 100,
          left: Math.random() * 100,
          opacity: getRandom(0.5, 1),
        }),
      );
      break;
    case 'FirstWord':
      yield put(
        addFirefly({
          id: Date.now(),
          top: Math.random() * 100,
          left: Math.random() * 100,
          opacity: getRandom(0.5, 1),
        }),
      );
      break;
    case 'ChatMessage':
      // Add a firefly for resubs
      yield put(
        addFirefly({
          id: Date.now(),
          top: Math.random() * 100,
          left: Math.random() * 100,
          opacity: getRandom(0.5, 1),
        }),
      );
      break;
    default:
      console.error('Unknown event type:', eventType);
  }
}

// Function to handle WebSocket data
function* handleWebSocketData(data: WebSocketEvent): Generator<any, void, any> {
  const { event, data: eventData } = data;
  if (event && event.source === 'Twitch') {
    yield call(handleTwitchEffectsEvent, event.type);
  }
}

// Watcher saga for Twitch effects WebSocket connection
function* watchTwitchEffectsWebSocketConnection(): Generator<any, void, any> {
  const channel = yield call(createEffectsWebSocketConnection, {
    Twitch: ['Follow', 'Sub', 'ReSub', 'FirstWord', 'ChatMessage'],
  });

  while (true) {
    const data: WebSocketEvent = yield take(channel);
    // const eventData = data.event.type;
    yield call(handleWebSocketData, data);
  }
}

// Root saga for effects-related WebSocket functionality
export default function* effectsSaga(): Generator<any, void, any> {
  yield fork(watchTwitchEffectsWebSocketConnection);
}
