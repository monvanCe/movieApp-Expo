import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import i18n from '@localization/index';
import { store, useAppSelector } from '@store/store';
import Theme, { themes } from '@styles/theme';
import { appTheme } from '@utils/enums';
import { Stack } from 'expo-router/stack';
import { View } from 'moti';

function AppLayout() {
  const currentTheme = useAppSelector(state => state.appConfig.appTheme);
  const colors = themes[currentTheme];
  const appLanguage = useAppSelector(state => state.appConfig.appLanguage);

  React.useEffect(() => {
    i18n.locale = appLanguage;
  }, [appLanguage]);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      StatusBar.setBarStyle(currentTheme === appTheme.Light ? 'dark-content' : 'light-content');
    });
  }, [currentTheme]);

  return (
    <Theme.ThemeProvider theme={colors}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen
          name='(tabs)'
          options={{
            headerShown: true,
            title: 'Movie App',
            headerStyle: { backgroundColor: colors.background },
            headerTitleStyle: { color: colors.primaryText },
            headerBackground: () => <View style={{ backgroundColor: colors.background }} />,
            headerTitleAlign: 'center',
          }}
        />
      </Stack>
    </Theme.ThemeProvider>
  );
}

export default function Wrapper() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}
