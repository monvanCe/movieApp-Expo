import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../src/components/atoms/button';
import { bottomTabs } from '../src/const/routeNames';
import { originalImage } from '../src/const/imageURLs';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';

export default function () {
  const [height, setHeight] = React.useState<number>(100);

  const toggleHeight = () => {
    setHeight(height === 100 ? 200 : 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        text="Go to Bottom Tabs"
        onPress={() => router.push(bottomTabs)}
      />

      <MotiPressable
        onPress={toggleHeight}
        animate={{ height }}
        transition={{ type: 'timing' }}
      >
        <Image
          source={{ uri: originalImage('/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg') }}
          style={{
            width: '100%',
            height: '100%',
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
    backgroundColor: '#8312a5',
  },
});
