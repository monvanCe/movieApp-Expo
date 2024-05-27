import React from 'react';
import { View } from 'react-native';

import Organism from '@components/organism';

export default function Search() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 40, backgroundColor: 'red' }}></View>
      <Organism.BannerMovies />
    </View>
  );
}
