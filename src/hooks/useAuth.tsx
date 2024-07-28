import { Platform } from 'react-native';

import { loginService } from '@service/internalServices';
import { getItemAsync, setItemAsync } from 'expo-secure-store';

export const useAuth = () => {
  const login = async () => {
    const userUniqueKey = await getItemAsync('userUniqueKey');
    const platform = Platform.OS === 'ios' ? 'IOS' : 'ANDROID';
    const uniqueKey = userUniqueKey ? userUniqueKey : Date.now();
    const appVersion = Number(process.env.EXPO_PUBLIC_APP_VERSION) || 1;

    if (!userUniqueKey) {
      await setItemAsync('userUniqueKey', uniqueKey.toString());
    }
    try {
      const response = await loginService(
        uniqueKey.toString(),
        platform,
        'notificationId',
        appVersion
      );
    } catch (error) {
      throw error;
    }
  };

  return { login };
};
