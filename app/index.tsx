import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MotiPressable } from 'moti/interactions';

import Button from '../src/components/atoms/button';
import { lowResImage } from '../src/const/imageURLs';
import { bottomTabs } from '../src/const/routeNames';
import useToggle from '../src/hooks/useToggle';

const { width } = Dimensions.get('window');

export default function () {
  const { isToggle, toggle } = useToggle();

  return (
    <SafeAreaView style={styles.container}>
      <Button text='Go to Bottom Tabs' onPress={() => router.push(bottomTabs)} />

      <MotiPressable
        onPress={toggle}
        style={{ backgroundColor: 'black', aspectRatio: 16 / 9 }}
        animate={{ width: isToggle ? width : width / 2 }}
        transition={{ type: 'timing' }}>
        <Image
          source={{ uri: lowResImage('/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg') }}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'contain',
          }}
        />
      </MotiPressable>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
