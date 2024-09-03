// src/redux/emailSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Email } from '../types';

interface EmailState {
  emails: Email[];
}

const initialState: EmailState = {
  emails: [],
};

// Create a slice of the Redux state
const emailSlice = createSlice({
  name: 'emails',
  initialState,
  reducers: {
    addEmail: (state, action: PayloadAction<Email>) => {
      state.emails.push(action.payload);
    },
    updateEmail: (state, action: PayloadAction<Email>) => {
      const index = state.emails.findIndex(
        (email) => email.id === action.payload.id,
      );
      if (index !== -1) {
        state.emails[index] = action.payload;
      }
    },
    deleteEmail: (state, action: PayloadAction<string>) => {
      state.emails = state.emails.filter(
        (email) => email.id !== action.payload,
      );
    },
  },
});

export const { addEmail, updateEmail, deleteEmail } = emailSlice.actions;
export const emailReducer = emailSlice.reducer;
