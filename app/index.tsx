import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';

import { useAppSelector } from '../src/store/store';
import Button from '../src/components/atoms/button';
import { bottomTabs } from '../src/const/routeNames';
import { fetchBannerMovies } from '../src/actions/fetchBannerMovies';

export default function () {
  const popular = useAppSelector((state) => state.movies.popular);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        text="Go to Bottom Tabs"
        onPress={() => router.push(bottomTabs)}
      />
      <Button text="Fetch Banner Movies" onPress={fetchBannerMovies} />
      <FlashList
        data={popular}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        estimatedItemSize={30}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8312a5',
  },
});
