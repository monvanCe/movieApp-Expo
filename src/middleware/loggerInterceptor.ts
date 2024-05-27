import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const loggerInterceptor = (axiosInstance: any) => {
  axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    console.log('REQUEST: ', config.url, config.params);
    return config;
  });

  axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    console.log('RESPONSE: ', response.config.url, response.config.params, {
      data: response.data,
    });
    return response;
  });
};
