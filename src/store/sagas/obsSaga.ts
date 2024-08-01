import {
  call,
  takeEvery,
  ForkEffect,
  CallEffect,
  PutEffect,
  fork,
} from 'redux-saga/effects';
import ObsWebSocketClient from './obsWebsocketClient';
import { resizeSource } from '../slices/obsSlice';
import { PayloadAction } from '@reduxjs/toolkit';

// Helper function to handle connection logic
function* ensureConnected() {
  if (!ObsWebSocketClient.isConnected()) {
    try {
      yield call(() =>
        ObsWebSocketClient.connect('ws://localhost:4455', 'your_password'),
      );
    } catch (error) {
      console.error('Failed to connect to OBS WebSocket', error);
    }
  }
}

// Handler for resizing source
function* handleResizeSource(
  action: PayloadAction<{ sourceName: string; width: number; height: number }>,
): Generator<CallEffect | PutEffect, void, unknown> {
  const { sourceName, width, height } = action.payload;
  try {
    yield call(ensureConnected); // Ensure the WebSocket connection is established

    yield call(() =>
      ObsWebSocketClient.call('SetInputSettings', {
        inputName: sourceName,
        inputSettings: {
          width,
          height,
        },
        overlay: true,
      }),
    );

    console.log(
      `Browser source ${sourceName} updated: width=${width}, height=${height}`,
    );
  } catch (error) {
    console.error(`Failed to update browser source ${sourceName}`, error);
  }
}

// Watcher saga for resizing source
export function* watchResizeSource(): Generator<ForkEffect, void, unknown> {
  yield takeEvery(resizeSource.type, handleResizeSource);
}

// Root saga for OBS-related functionality
export default function* obsSaga(): Generator<ForkEffect> {
  yield fork(watchResizeSource);
}
