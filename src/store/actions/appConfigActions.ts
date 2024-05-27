import i18n from '@localization/index';
import slices from '@store/slices';
import { store } from '@store/store';
import { appTheme, storageKeys } from '@utils/enums';
import storage from '@utils/storage';
import { getLocales } from 'expo-localization';

const appConfigSlice = slices.appConfigSlice.actions;

export const loadTheme = async () => {
  const appTheme = (await storage.getItem(storageKeys.appTheme)) as appTheme;
  if (appTheme) {
    setAppTheme(appTheme);
  }
};

export const loadLanguage = async () => {
  const appLanguage = (await storage.getItem(storageKeys.appLanguage)) as string;
  let language = '';

  if (appLanguage) {
    language = appLanguage;
  } else {
    language = getLocales()?.[0]?.languageCode || 'en';
  }

  setAppLanguage(language);
};

export const toggleTheme = () => {
  const currentTheme = store.getState().appConfig.appTheme;
  const newTheme = currentTheme === appTheme.Dark ? appTheme.Light : appTheme.Dark;
  setAppTheme(newTheme);
};

export const setAppTheme = (theme: appTheme) => {
  const dispatch = store.dispatch;
  dispatch(appConfigSlice.setAppTheme(theme));
};

export const setAppLanguage = (language: string) => {
  const dispatch = store.dispatch;
  i18n.locale = language;
  dispatch(appConfigSlice.setAppLanguage(language));
};
