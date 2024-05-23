// sagas/websocketSaga.ts
import { call, put, takeEvery, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
    CONNECT_WEBSOCKET,
    receiveWebSocketData,
    websocketConnected,
} from '../actions/websocketActions'; // Import your action types and action creators
import { StreamerbotClient } from '@streamerbot/client'; // Import your WebSocket client

// Variable to track WebSocket connection status
let isWebSocketConnected = false;

function createWebSocketConnection() {
    return eventChannel((emit) => {
        // Instantiate StreamerbotClient with custom configuration
        const client = new StreamerbotClient({
            subscribe: {
                Twitch: ['ChatMessage', 'Follow'],
            },
            onData: (data: any) => {
                // Emit the received data to the channel
                emit(data);
            },
        });

        // Update connection status
        isWebSocketConnected = true;

        // Return cleanup function
        return () => {
            // Close WebSocket connection if needed
            client.disconnect();
            isWebSocketConnected = false;
        };
    });
}

function* handleWebSocketData(data: any) {
    // Log the received data
    console.log('Received data from WebSocket:', data);

    // Dispatch action to handle received message
    yield put(receiveWebSocketData(data));
}

function* watchWebSocketConnection() {
    // Check if WebSocket is already connected
    if (!isWebSocketConnected) {
        // Dispatch action to indicate WebSocket connection
        yield put(websocketConnected());

        // Take CONNECT_WEBSOCKET action and create WebSocket connection
        yield takeEvery(CONNECT_WEBSOCKET, function* () {
            // @ts-ignore
            const channel = yield call(createWebSocketConnection);
            while (true) {
                // @ts-ignore
                const data = yield take(channel);
                yield call(handleWebSocketData, data);
            }
        });
    } else {
        console.log('WebSocket connection is already established.');
    }
}

export default function* websocketSaga() {
    yield watchWebSocketConnection();
}
