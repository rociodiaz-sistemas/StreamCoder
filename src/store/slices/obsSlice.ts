// store/slices/obsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ResizeState {
  sourceName: string;
  width: number;
  height: number;
}

interface ObsState {
  resize: ResizeState;
  // Add other OBS-related states here if needed
}

const initialState: ObsState = {
  resize: {
    sourceName: '',
    width: 0,
    height: 0,
  },
  // Initialize other states if needed
};

const obsSlice = createSlice({
  name: 'obs',
  initialState,
  reducers: {
    resizeSource: (
      state,
      action: PayloadAction<{
        sourceName: string;
        width: number;
        height: number;
      }>,
    ) => {
      const { sourceName, width, height } = action.payload;
      state.resize.sourceName = sourceName;
      state.resize.width = width;
      state.resize.height = height;
    },
    // Add other OBS-related reducers here if needed
  },
});

export const { resizeSource } = obsSlice.actions;
export const obsReducer = obsSlice.reducer;
