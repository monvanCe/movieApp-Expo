import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { storageKeys } from '@const/enums';
import { loginService } from '@service/internalServices';
import { setCurrentUser } from '@store/slices/authSlice';
import { useAppDispatch } from '@store/store';
import storage from '@utils/storage';
import 'expo-dev-client';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const login = async () => {
    const userUniqueKey = await DeviceInfo.getUniqueId();
    const platform = Platform.OS === 'ios' ? 'IOS' : 'ANDROID';

    const appVersion = Number(process.env.EXPO_PUBLIC_APP_VERSION) || 1;

    try {
      const response = await loginService(userUniqueKey, platform, 'notificationId', appVersion);

      const user = { ...response.user, token: response.token };

      storage.setItem(storageKeys.auth, JSON.stringify(user));
      dispatch(setCurrentUser(user));
    } catch (error) {
      throw error;
    }
  };

  const loadUser = async () => {
    const user = await storage.getItem(storageKeys.auth);
    if (user) {
      dispatch(setCurrentUser(JSON.parse(user)));
    } else {
      await login();
    }
  };

  return { login, loadUser };
};
