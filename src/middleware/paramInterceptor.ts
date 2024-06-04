import { storageKeys } from '@utils/enums';
import storage from '@utils/storage';
import { AxiosRequestConfig } from 'axios';

export const paramInterceptor = async (axiosInstance: any) => {
  const appLanguage = await storage.getItem(storageKeys.appLanguage);

  axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    if (appLanguage) {
      config.params = {
        ...config.params,
        language: appLanguage,
      };
    }

    return config;
  });
};
