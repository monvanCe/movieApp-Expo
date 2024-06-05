import React from 'react';

import Atoms from '@components/atoms';
import { Ionicons } from '@expo/vector-icons';
import i18n from '@localization/index';
import sizes from '@styles/sizes';
import theme from '@styles/theme';
import { Tabs } from 'expo-router';

export default function AppLayout() {
  const colors = theme.useTheme();
  const { fontSizes } = sizes;

  return (
    <>
      <Atoms.SafeAreaView />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.tertiaryText,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopWidth: 1,
            borderTopColor: colors.border,
          },
          tabBarShowLabel: true,
          headerShown: false,
        }}
        sceneContainerStyle={{ backgroundColor: colors.background }}>
        <Tabs.Screen
          name='index'
          options={{
            title: i18n.t('lists'),
            tabBarIcon: ({ color }) => (
              <Ionicons name='home' size={fontSizes.large} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='search'
          options={{
            title: i18n.t('search'),
            tabBarIcon: ({ color }) => (
              <Ionicons name='search' size={fontSizes.large} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: i18n.t('profile'),
            tabBarIcon: ({ color }) => (
              <Ionicons name='person' size={fontSizes.large} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
