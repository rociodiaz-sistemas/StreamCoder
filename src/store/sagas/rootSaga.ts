import { all, fork } from 'redux-saga/effects';
import streamerbotSaga from './streamerbotSaga';
import obsSaga from './obsSaga';
// Import other sagas as needed

export default function* rootSaga() {
  yield all([
    fork(streamerbotSaga),
    fork(obsSaga),
    // Add other sagas here
  ]);
}
