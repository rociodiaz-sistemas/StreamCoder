import { all, fork } from 'redux-saga/effects';
import obsSaga from './obsSaga';
import chatSaga from './chatSaga';
import effectsSaga from './effectsSaga';
// Import other sagas as needed

export default function* rootSaga() {
  yield all([
    fork(chatSaga),
    fork(obsSaga),
    fork(effectsSaga)
    // Add other sagas here
  ]);
}
