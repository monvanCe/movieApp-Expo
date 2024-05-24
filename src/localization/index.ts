import { store } from '@store/store';
import { I18n } from 'i18n-js';

import en from './en.json';
import tr from './tr.json';

const i18n = new I18n({
  en,
  tr,
});

const appLanguage = store.getState().appConfig.appLanguage;

i18n.locale = appLanguage;

export default i18n;
