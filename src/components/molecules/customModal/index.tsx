import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import Atoms from '@components/atoms';
import theme from '@styles/theme';

import { styles } from './styles';
import { ICustomModal } from './types';

export default function CustomModal({ children, visible, onClose, height }: ICustomModal) {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);

  return (
    <Modal animationType='slide' transparent={true} visible={visible}>
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: 'black', opacity: 0.1 }}
        onPress={onClose}
      />
      <View style={[style.modalContent, { height }]}>
        <View style={style.iconButtonContainer}>
          <Atoms.IconButton icon='close' onPress={onClose} />
        </View>
        {children}
      </View>
    </Modal>
  );
}
