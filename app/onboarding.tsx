import { router } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { bottomTabs } from './const/routeNames';
import Button from './components/atoms/button';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
      <Button text="Go to bottom" onPress={() => router.push(bottomTabs)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
