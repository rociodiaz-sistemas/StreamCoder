import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { messagesReducer } from './slices/messageSlice';
import websocketSaga from './sagas/websocketSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(websocketSaga);

export default store;