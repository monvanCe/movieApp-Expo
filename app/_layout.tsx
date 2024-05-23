import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import { Stack } from 'expo-router/stack';

import { store, useAppSelector } from '../src/store/store';
import Theme, { themes } from '../src/styles/theme';

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
