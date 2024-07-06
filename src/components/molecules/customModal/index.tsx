import React from 'react';
import { DimensionValue, Modal, TouchableOpacity, View } from 'react-native';

import Atoms from '@components/atoms';
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
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);

  return (
    <Modal animationType='slide' transparent={true} visible={visible}>
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: 'black', opacity: 0.1 }}
        onPress={onPress}
      />
      <View style={[style.modalContent, { height }]}>
        <View style={style.iconButtonContainer}>
          <Atoms.IconButton icon='close' onPress={onPress} />
        </View>
        {children}
      </View>
    </Modal>
  );
}
