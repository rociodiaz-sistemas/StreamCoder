import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageModel } from '../utils/models';

// Define initial state
const initialState: MessageModel[] = [];

// Create a mock slice for teams
const messagesSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    receiveMessage(state, action: PayloadAction<MessageModel>) {
      state.push(action.payload);
    },
  },
});

// Create a mock store with the teams slice
export const mockStore = configureStore({
  reducer: {
    messages: messagesSlice.reducer,
  },
});

export default mockStore;
