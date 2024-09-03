import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { messagesReducer } from './slices/messageSlice';
import { obsReducer } from './slices/obsSlice';
import rootSaga from './sagas/rootSaga'; // Import the root saga
import { effectsReducer } from './slices/effectsSlice';
import { emailReducer } from './slices/emailSlice';

const sagaMiddleware = createSagaMiddleware();

// Combine reducers to create rootReducer
const rootReducer = combineReducers({
  messages: messagesReducer,
  obsActions: obsReducer,
  effects: effectsReducer,
  emails: emailReducer,
  // Add other reducers here if needed
});

// Define RootState type based on the return type of rootReducer
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
