import { router } from 'expo-router';
import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
      <Button title="Go to previous page" onPress={() => router.back()} />
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
