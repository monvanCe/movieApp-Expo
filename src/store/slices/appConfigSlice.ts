import { appTheme, storageKeys } from '@const/enums';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import storage from '@utils/storage';

interface AppConfigState {
  externalURL: string | null;
  externalApiKey: string | null;
  appTheme: appTheme;
  appLanguage: string;
}

const initialState: AppConfigState = {
  externalURL: null,
  externalApiKey: '4f098a761153500ca2a6a2d39980f694',
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
    setAppTheme: (state, action: PayloadAction<appTheme>) => {
      state.appTheme = action.payload;
      storage.setItem(storageKeys.appTheme, action.payload);
    },
    setAppLanguage: (state, action: PayloadAction<string>) => {
      state.appLanguage = action.payload;
    },
  },
});

export const { setExternalURL, setAppTheme, setExternalApiKey, setAppLanguage } =
  appConfigSlice.actions;

export default appConfigSlice.reducer;
