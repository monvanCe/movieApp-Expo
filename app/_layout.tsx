import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import i18n from '@localization/index';
import { store, useAppSelector } from '@store/store';
import { appTheme } from '@store/types';
import Theme, { themes } from '@styles/theme';
import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';
import { View } from 'moti';

function AppLayout() {
  const currentTheme = useAppSelector(state => state.appConfig.appTheme);
  const colors = themes[currentTheme];
  const appLanguage = useAppSelector(state => state.appConfig.appLanguage);

  React.useEffect(() => {
    i18n.locale = appLanguage;
  }, [appLanguage]);

  return (
    <Theme.ThemeProvider theme={colors}>
      <StatusBar style={currentTheme === appTheme.Dark ? appTheme.Light : appTheme.Dark} />
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
        <Stack.Screen
          name='modal'
          options={{
            headerShown: true,
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
