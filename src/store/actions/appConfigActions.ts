import i18n from '@localization/index';
import storage from '@utils/storage';

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
  if (appLanguage) {
    dispatch(appConfigSlice.setAppLanguage(appLanguage));
  }
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
