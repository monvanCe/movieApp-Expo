import { cacherInterceptor } from '@middleware/cacherInterceptor';
import { loggerInterceptor } from '@middleware/loggerInterceptor';
import { paramInterceptor } from '@middleware/paramInterceptor';
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
  },
});

cacherInterceptor(axiosInstance);
paramInterceptor(axiosInstance);
transformerInterceptor(axiosInstance);
loggerInterceptor(axiosInstance);

export default axiosInstance;
