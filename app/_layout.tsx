import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import i18n from '@localization/index';
import { store, useAppSelector } from '@store/store';
import Theme, { themes } from '@styles/theme';
import { Stack } from 'expo-router/stack';

function AppLayout() {
  const currentTheme = useAppSelector(state => state.appConfig.appTheme);
  const colors = themes[currentTheme];
  const appLanguage = useAppSelector(state => state.appConfig.appLanguage);

  React.useEffect(() => {
    i18n.locale = appLanguage;
  }, [appLanguage]);

  return (
    <Theme.ThemeProvider theme={colors}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: true }} />
        <Stack.Screen
          name='modal'
          options={{
            presentation: 'modal',
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
