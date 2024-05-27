import { loggerInterceptor } from '@middleware/loggerInterceptor';
import { transformerInterceptor } from '@middleware/transformerInterceptor';
import { store } from '@store/store';
import axios from 'axios';

const state = store.getState();
const apiKey = state.appConfig.externalApiKey;

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: apiKey,
    language: 'tr-TR',
  },
});

loggerInterceptor(axiosInstance);
transformerInterceptor(axiosInstance);

export default axiosInstance;
