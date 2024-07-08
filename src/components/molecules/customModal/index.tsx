import React, { useMemo } from 'react';
import {
  DimensionValue,
  Dimensions,
  GestureResponderEvent,
  Modal,
  PanResponder,
  PanResponderGestureState,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Atoms from '@components/atoms';
import { paddings } from '@styles/sizes';
import theme from '@styles/theme';

import { styles } from './styles';

interface ICustomModalWithHeight extends IChildren, IVisible, IOnPress {
  height: DimensionValue;
}

export default function CustomModal({
  children,
  visible,
  onPress,
  height,
}: ICustomModalWithHeight) {
  const screenHeight = Dimensions.get('window').height;
  const containerHeight: any = useMemo(
    () => (typeof height === 'string' ? screenHeight * (parseFloat(height) / 100) : height),
    [height]
  );
  const insets = useSafeAreaInsets();
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);
  const [changeY, setChangeY] = React.useState(0);

  const handleMove = (event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    setChangeY(prev => prev + gestureState.dy);
  };

  const pandResponser = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: handleMove,
    onPanResponderRelease: () => setChangeY(0),
  });

  return (
    <Modal animationType='slide' transparent={true} visible={visible}>
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: 'black', opacity: 0.1 }}
        onPress={onPress}
      />
      <View style={style.modalContainer}>
        <View
          style={{
            height: containerHeight - changeY,
            maxHeight: screenHeight - insets.top,
            paddingHorizontal: paddings.medium,
            paddingBottom: insets.bottom,
          }}>
          <View {...pandResponser.panHandlers} style={style.iconButtonContainer}>
            <View style={style.modalSlider} />
            <Atoms.IconButton icon='close' onPress={onPress} />
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}
