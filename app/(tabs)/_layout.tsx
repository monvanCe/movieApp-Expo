import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import i18n from '@localization/index';
import sizes from '@styles/sizes';
import theme from '@styles/theme';
import { Tabs } from 'expo-router';

export default function AppLayout() {
  const colors = theme.useTheme();
  const { fontSizes } = sizes;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tertiaryText,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderTopColor: colors.border,
        },
        tabBarShowLabel: false,
      }}
      sceneContainerStyle={{ backgroundColor: colors.background }}>
      <Tabs.Screen
        name='lists'
        options={{
          title: i18n.t('lists'),
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name='home' size={fontSizes.large} color={color} />,
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: i18n.t('search'),
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name='search' size={fontSizes.large} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: i18n.t('profile'),
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name='person' size={fontSizes.large} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
