import { all, fork } from 'redux-saga/effects';
import obsSaga from './obsSaga';
import chatSaga from './chatSaga';
import effectsSaga from './effectsSaga';
import serverSaga from './serverSaga'; // Import the new saga here
// Import other sagas as needed

export default function* rootSaga() {
  yield all([
    fork(chatSaga),
    fork(obsSaga),
    fork(effectsSaga),
    fork(serverSaga),
    // Add other sagas here
  ]);
}
