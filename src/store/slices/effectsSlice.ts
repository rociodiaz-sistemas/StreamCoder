// slices/effectsSlice.ts
import { NumberInputFieldProps } from '@chakra-ui/react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Firefly {
  id: number;
  top: number;
  left: number;
  opacity: number;
}

interface EffectsState {
  fireflies: Firefly[];
  moneyRain: any[]; // Adjust as needed
}

const initialState: EffectsState = {
  fireflies: [],
  moneyRain: [],
};

const effectsSlice = createSlice({
  name: 'effects',
  initialState,
  reducers: {
    addFirefly: (state, action: PayloadAction<Firefly>) => {
      state.fireflies.push(action.payload);
    },
    triggerMoneyRain: (state, action: PayloadAction<any>) => {
      state.moneyRain.push(action.payload);
    },
  },
});

export const { addFirefly, triggerMoneyRain } = effectsSlice.actions;
export const effectsReducer = effectsSlice.reducer;
