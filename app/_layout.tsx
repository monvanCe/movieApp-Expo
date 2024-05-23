import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import { store, useAppSelector } from '@store/store';
import Theme, { themes } from '@styles/theme';
import { Stack } from 'expo-router/stack';

function AppLayout() {
  const currentTheme = useAppSelector(state => state.appConfig.appTheme);
  const colors = themes[currentTheme];

  return (
    <Theme.ThemeProvider theme={colors}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: true }} />
      </Stack>
    </Theme.ThemeProvider>
  );
}

export default function () {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}
