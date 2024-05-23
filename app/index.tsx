import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MotiPressable } from 'moti/interactions';

import Atoms from '../src/components/atoms';
import imageSources from '../src/const/imageSources';
import routeNames from '../src/const/routeNames';
import useToggle from '../src/hooks/useToggle';
import actions from '../src/store/actions';
import theme from '../src/styles/theme';

const { width } = Dimensions.get('window');

export default function () {
  const { isToggle, toggle } = useToggle();
  const colors = theme.useTheme();
  const appConfigActions = actions.appConfigActions;

  return (
    <>
      <StatusBar style='light' />
      <SafeAreaView style={[styles.container, { backgroundColor: colors.primary }]}>
        <Atoms.button text='Go to Bottom Tabs' onPress={() => router.push(routeNames.bottomTabs)} />
        <Atoms.button text='change app theme' onPress={() => appConfigActions.toggleTheme()} />

        <MotiPressable
          onPress={toggle}
          style={{ aspectRatio: 16 / 9 }}
          animate={{ width: isToggle ? width : width / 2 }}
          transition={{ type: 'timing' }}>
          <Image
            source={{ uri: imageSources.highResImage('/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg') }}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'contain',
            }}
          />
        </MotiPressable>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
