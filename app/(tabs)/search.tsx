import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

import Molecules from '@components/molecules';
import Organism from '@components/organism';
import useToggle from '@hooks/useToggle';

export default function Search() {
  const { toggle, isToggle, close } = useToggle();

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={toggle} style={{ height: 40, backgroundColor: 'red' }}>
        <Molecules.CustomModal visible={isToggle} onPress={close} height={'100%'}>
          <Text>Modal</Text>
        </Molecules.CustomModal>
      </TouchableOpacity>
      <Organism.BannerMovies />
    </View>
  );
}
