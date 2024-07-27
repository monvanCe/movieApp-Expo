import { loginOrRegisterService } from '@service/internalServices';

export const useAuth = () => {
  const login = async () => {
    const now = Date.now();
    try {
      const response = await loginOrRegisterService(now.toString());
      console.log(response);
    } catch (error) {
      throw error;
    }
  };

  return { login };
};
