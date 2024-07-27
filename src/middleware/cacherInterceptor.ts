import storage from '@utils/storage';

const whitelistPatterns = [/^\/movie\/\d+$/, /^\/person\/\d+$/];

export const cacherInterceptor = (axiosInstance: any) => {
  axiosInstance.interceptors.request.use(async (config: any) => {
    const url = new URL(config.url);
    if (whitelistPatterns.some(pattern => pattern.test(url.pathname))) {
      const cacheKey = `${config.url}-${JSON.stringify(config.params)}`;
      const cachedResponse = await storage.getItem(cacheKey);

      if (cachedResponse) {
        config.adapter = async () => {
          return {
            data: JSON.parse(cachedResponse),
            status: 200,
            statusText: 'OK',
            headers: {},
            config,
            request: {},
          };
        };
      }
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    async (response: any) => {
      const url = new URL(response.config.url);
      if (
        whitelistPatterns.some(pattern => pattern.test(url.pathname)) &&
        response.status === 200
      ) {
        const cacheKey = `${response.config.url}-${JSON.stringify(response.config.params)}`;
        await storage.setItem(cacheKey, JSON.stringify(response.data));
      }
      return response;
    },
    (error: unknown) => {
      return Promise.reject(error);
    }
  );
};
