import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

import Molecules from '@components/molecules';
import Organism from '@components/organism';
import useToggle from '@hooks/useToggle';

export default function Search() {
  const { toggle, isToggle, close } = useToggle();
  const [modalHeight, setModalHeight] = useState(422);
  const heightAnim = useRef(new Animated.Value(modalHeight)).current;

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: isToggle ? 844 : 422,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  }, [isToggle]);

  useEffect(() => {
    heightAnim.addListener(({ value }) => setModalHeight(value));
    return () => heightAnim.removeAllListeners();
  }, [heightAnim]);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={toggle} style={{ height: 40, backgroundColor: 'red' }}>
        <Animated.View style={{ height: heightAnim }}>
          <Molecules.CustomModal visible={isToggle} onPress={close} height={modalHeight}>
            <Text>Modal</Text>
          </Molecules.CustomModal>
        </Animated.View>
      </TouchableOpacity>
      <Organism.BannerMovies />
    </View>
  );
}
