import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { appTheme, storageKeys } from '@utils/enums';
import storage from '@utils/storage';

interface AppConfigState {
  externalURL: string;
  externalApiKey: string;
  internalURL: string;
  appTheme: appTheme;
  appLanguage: string;
}

const initialState: AppConfigState = {
  externalURL: 'https://api.themoviedb.org/3',
  externalApiKey: '4f098a761153500ca2a6a2d39980f694',
  internalURL: 'https://movielt.monvance.com',
  appTheme: appTheme.Dark,
  appLanguage: 'en',
};

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setExternalURL: (state, action: PayloadAction<string>) => {
      state.externalURL = action.payload;
    },
    setExternalApiKey: (state, action: PayloadAction<string>) => {
      state.externalApiKey = action.payload;
    },
    setInternalURL: (state, action: PayloadAction<string>) => {
      state.internalURL = action.payload;
    },
    setAppTheme: (state, action: PayloadAction<appTheme>) => {
      state.appTheme = action.payload;
      storage.setItem(storageKeys.appTheme, action.payload);
    },
    setAppLanguage: (state, action: PayloadAction<string>) => {
      state.appLanguage = action.payload;
    },
  },
});

export const { setExternalURL, setInternalURL, setAppTheme, setExternalApiKey, setAppLanguage } =
  appConfigSlice.actions;

export default appConfigSlice.reducer;
