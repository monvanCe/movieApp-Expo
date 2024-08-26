import { authInteceptor } from '@middleware/authInterceptor';
import { cacherInterceptor } from '@middleware/cacherInterceptor';
import { loggerInterceptor } from '@middleware/loggerInterceptor';
import { paramInterceptor } from '@middleware/paramInterceptor';
import { transformerInterceptor } from '@middleware/transformerInterceptor';
import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

cacherInterceptor(axiosInstance);
paramInterceptor(axiosInstance);
transformerInterceptor(axiosInstance);
loggerInterceptor(axiosInstance);
authInteceptor(axiosInstance);

export default axiosInstance;
