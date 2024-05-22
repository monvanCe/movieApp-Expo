import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AppConfigState {
  isDarkMode: boolean;
  externalURL: string;
  internalURL: string;
  apiKey: string;
}

const initialState: AppConfigState = {
  isDarkMode: false,
  externalURL: 'https://api.themoviedb.org/3',
  internalURL: '',
  apiKey: '4f098a761153500ca2a6a2d39980f694',
};

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
    setBaseURL: (state, action: PayloadAction<string>) => {
      state.externalURL = action.payload;
    },
    setInternalURL: (state, action: PayloadAction<string>) => {
      state.internalURL = action.payload;
    },
  },
});

export const { setDarkMode } = appConfigSlice.actions;

export default appConfigSlice.reducer;
