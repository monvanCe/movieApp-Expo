import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { appTheme } from '@const/enums';
import { useAuth } from '@hooks/useAuth';
import { loadAppConfig, loadLanguage, loadTheme } from '@store/actions/appConfigActions';
import { store, useAppSelector } from '@store/store';
import Theme, { themes } from '@styles/theme';
import { setGlobalConfig } from 'axios-logger';
import { SplashScreen, router } from 'expo-router';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

setGlobalConfig({
  status: false,
  headers: true,
  params: true,
});

function AppLayout() {
  const { login } = useAuth();
  const currentTheme = useAppSelector(state => state.appConfig.appTheme);
  const colors = themes[currentTheme];
  const [isAppLoaded, setIsAppLoaded] = React.useState(false);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      StatusBar.setBarStyle(currentTheme === appTheme.Light ? 'dark-content' : 'light-content');
    });
  }, [currentTheme]);

  React.useEffect(() => {
    const loadApp = async () => {
      await login();
      await loadTheme();
      await loadLanguage();
      await loadAppConfig();
    };

    loadApp().then(() => {
      setIsAppLoaded(true);
      SplashScreen.hideAsync();
    });
  }, []);

  if (!isAppLoaded) {
    return null;
  }

  return (
    <Theme.ThemeProvider theme={colors}>
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='+not-found' />
      </Stack>
    </Theme.ThemeProvider>
  );
}

export default function () {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppLayout />
      </SafeAreaProvider>
    </Provider>
  );
}
