import { Platform } from 'react-native';

import { loginService } from '@service/internalServices';
import { getItemAsync, setItemAsync } from 'expo-secure-store';

export const useAuth = () => {
  const login = async () => {
    const userUniqueKey = await getItemAsync('userUniqueKey');
    const platform = Platform.OS === 'ios' ? 'IOS' : 'ANDROID';
    const now = userUniqueKey ? userUniqueKey : Date.now();
    if (!userUniqueKey) {
      await setItemAsync('userUniqueKey', now.toString());
    }
    try {
      const response = await loginService(now.toString(), platform, '123', 1);
    } catch (error) {
      throw error;
    }
  };

  return { login };
};
