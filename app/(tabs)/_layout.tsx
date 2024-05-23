import React from 'react';

import i18n from '@localization/index';
import theme from '@styles/theme';
import { Tabs } from 'expo-router';

export default function AppLayout() {
  const colors = theme.useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tertiaryText,
        tabBarStyle: { backgroundColor: 'black', borderTopWidth: 1, borderTopColor: colors.border },
      }}
      sceneContainerStyle={{ backgroundColor: colors.background }}>
      <Tabs.Screen
        name='lists'
        options={{
          title: i18n.t('lists'),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: i18n.t('search'),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: i18n.t('profile'),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
