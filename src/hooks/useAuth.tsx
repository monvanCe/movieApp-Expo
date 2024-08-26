import { Platform } from 'react-native';

import { storageKeys } from '@const/enums';
import { loginService } from '@service/internalServices';
import { setCurrentUser } from '@store/slices/authSlice';
import { useAppDispatch } from '@store/store';
import { getItemAsync, setItem, setItemAsync } from 'expo-secure-store';

export const useAuth = () => {
  const dispatch = useAppDispatch();
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

      const user = { ...response.user, token: response.token };

      setItem(storageKeys.auth, JSON.stringify(user));
      dispatch(setCurrentUser(user));
    } catch (error) {
      throw error;
    }
  };

  const loadUser = async () => {
    const user: any = await getItemAsync(storageKeys.auth);
    if (user) {
      dispatch(setCurrentUser(JSON.parse(user)));
    } else {
      await login();
    }
  };

  return { login, loadUser };
};
