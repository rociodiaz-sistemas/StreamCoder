// src/redux/emailSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Email } from '../types';

interface EmailState {
  emails: Email[];
  loading: boolean;
  error: string | null;
}

const initialState: EmailState = {
  emails: [],
  loading: false,
  error: null,
};

// Create a slice of the Redux state
const emailSlice = createSlice({
  name: 'emails',
  initialState,
  reducers: {
    fetchEmailsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchEmailsSuccess: (state, action: PayloadAction<Email[]>) => {
      state.loading = false;
      state.emails = action.payload;
    },
    fetchEmailsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
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
    deleteEmail: (state, action: PayloadAction<number>) => {
      state.emails = state.emails.filter(
        (email) => email.id !== action.payload,
      );
    },
    toggleEmailFavorite: (state, action: PayloadAction<number>) => {
      const email = state.emails.find((email) => email.id === action.payload);
      if (email) {
        email.is_favorite = !email.is_favorite;
      }
    },
  },
});

export const {
  fetchEmailsRequest,
  fetchEmailsSuccess,
  fetchEmailsFailure,
  addEmail,
  updateEmail,
  deleteEmail,
  toggleEmailFavorite,
} = emailSlice.actions;

export const emailReducer = emailSlice.reducer;
