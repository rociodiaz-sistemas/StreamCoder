// src/sagas/emailSaga.ts

import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchEmailsRequest,
  fetchEmailsSuccess,
  fetchEmailsFailure,
  updateEmail,
  toggleEmailFavorite,
  deleteEmail,
} from '../slices/emailSlice';
import axios from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { Email } from '../types';

// Fetch emails with filters
function* fetchEmails(
  action: PayloadAction<{ status?: string; favorite?: boolean }>,
): Generator<any, void, any> {
  try {
    console.log('a');
    const response = yield call(axios.get, `http://localhost:3001/api/emails`, {
      params: action.payload,
    });
    yield put(fetchEmailsSuccess(response.data));
  } catch (error) {
    // Type guard to check if error is an instance of Error
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(fetchEmailsFailure(errorMessage));
  }
}

// Update email status
function* updateEmailSaga(action: PayloadAction<Email>) {
  try {
    yield call(axios.patch, `/api/emails/${action.payload.id}`, action.payload);
    yield put(updateEmail(action.payload));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Failed to update email', errorMessage);
  }
}

// Toggle email favorite status
function* toggleEmailFavoriteSaga(action: PayloadAction<number>) {
  try {
    yield call(axios.patch, `/api/emails/${action.payload}/favorite`);
    yield put(toggleEmailFavorite(action.payload));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Failed to toggle email favorite status', errorMessage);
  }
}

// Delete an email
function* deleteEmailSaga(action: PayloadAction<number>) {
  try {
    yield call(axios.delete, `/api/emails/${action.payload}`);
    yield put(deleteEmail(action.payload));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Failed to delete email', errorMessage);
  }
}

// Watcher sagas
export default function* emailSaga() {
  yield takeEvery(fetchEmailsRequest.type, fetchEmails);
  yield takeEvery(updateEmail.type, updateEmailSaga);
  yield takeEvery(toggleEmailFavorite.type, toggleEmailFavoriteSaga);
  yield takeEvery(deleteEmail.type, deleteEmailSaga);
}
