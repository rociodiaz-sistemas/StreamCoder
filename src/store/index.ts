import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux'; // Import combineReducers from redux
import { messagesReducer } from './slices/messageSlice';
import websocketSaga from './sagas/websocketSaga';

const sagaMiddleware = createSagaMiddleware();

// Combine reducers to create rootReducer
const rootReducer = combineReducers({
  messages: messagesReducer,
  // Add other reducers here if needed
});

// Define RootState type based on the return type of rootReducer
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(websocketSaga);

export default store;
