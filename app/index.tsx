import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Atoms from '@components/atoms';
import imageSources from '@const/imageSources';
import routeNames from '@const/routeNames';
import useToggle from '@hooks/useToggle';
import actions from '@store/actions';
import { useAppSelector } from '@store/store';
import theme from '@styles/theme';
import { router } from 'expo-router';
import { MotiPressable } from 'moti/interactions';

const { width } = Dimensions.get('window');

export default function Main() {
  const { isToggle, toggle } = useToggle();
  const colors = theme.useTheme();
  const appConfigActions = actions.appConfigActions;
  const appTheme = useAppSelector(state => state.appConfig.appTheme);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.primary }]}>
      <Atoms.button text='Go to Bottom Tabs' onPress={() => router.push(routeNames.bottomTabs)} />
      <Atoms.button
        text={`change app theme: ${appTheme}`}
        onPress={() => appConfigActions.toggleTheme()}
      />

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
