import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { appTheme } from '@const/enums';
import { loadLanguage, loadTheme } from '@store/actions/appConfigActions';
import { store, useAppSelector } from '@store/store';
import Theme, { themes } from '@styles/theme';
import { SplashScreen } from 'expo-router';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

function AppLayout() {
  const currentTheme = useAppSelector(state => state.appConfig.appTheme);
  const colors = themes[currentTheme];

  React.useEffect(() => {
    requestAnimationFrame(() => {
      StatusBar.setBarStyle(currentTheme === appTheme.Light ? 'dark-content' : 'light-content');
    });
  }, [currentTheme]);

  React.useEffect(() => {
    const loadApp = async () => {
      await loadTheme();
      await loadLanguage();
    };

    loadApp().then(() => {
      SplashScreen.hideAsync();
    });
  }, []);

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
