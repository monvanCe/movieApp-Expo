import i18n from '@localization/index';
import storage from '@utils/storage';
import { getLocales } from 'expo-localization';

import slices from '../slices';
import { store } from '../store';
import { appTheme } from '../types';

const appConfigSlice = slices.appConfigSlice.actions;

export const loadTheme = async () => {
  const dispatch = store.dispatch;
  const appTheme = (await storage.getItem('appTheme')) as appTheme;
  if (appTheme) {
    dispatch(appConfigSlice.setAppTheme(appTheme));
  }
};

export const loadLanguage = async () => {
  const dispatch = store.dispatch;
  const appLanguage = (await storage.getItem('appLanguage')) as string;
  let language = '';

  if (appLanguage) {
    language = appLanguage;
  } else {
    language = getLocales()?.[0]?.languageCode || 'en';
  }

  dispatch(appConfigSlice.setAppLanguage(language));
};

export const toggleTheme = () => {
  const dispatch = store.dispatch;
  const currentTheme = store.getState().appConfig.appTheme;
  const newTheme = currentTheme === appTheme.Dark ? appTheme.Light : appTheme.Dark;
  dispatch(appConfigSlice.setAppTheme(newTheme));
};

export const setAppLanguage = (language: string) => {
  const dispatch = store.dispatch;
  dispatch(appConfigSlice.setAppLanguage(language));
};
