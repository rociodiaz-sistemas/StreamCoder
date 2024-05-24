import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageModel } from '../../utils/models';

const initialState: MessageModel[] = [];

const messagesSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    receiveMessage(state, action: PayloadAction<MessageModel>) {
      state.push(action.payload);
    },
  },
});

export const { receiveMessage } = messagesSlice.actions;

export const messagesReducer = messagesSlice.reducer;