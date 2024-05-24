import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import routeNames from '@const/routeNames';
import actions from '@store/actions';
import theme from '@styles/theme';
import { router } from 'expo-router';

export default function Main() {
  const colors = theme.useTheme();
  const appConfigActions = actions.appConfigActions;

  React.useEffect(() => {
    const loadApp = async () => {
      await appConfigActions.loadTheme();
      await appConfigActions.loadLanguage();
      router.replace(routeNames.bottomTabs);
    };
    loadApp();
  }, []);

  return <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} />;
}
