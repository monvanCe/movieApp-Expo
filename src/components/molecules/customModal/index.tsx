import React, { useEffect, useMemo, useRef } from 'react';
import { DimensionValue, Dimensions, Modal, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Atoms from '@components/atoms';
import { horizontalScale } from '@styles/metricEngine';
import { borderRadius, paddings } from '@styles/sizes';
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
  const [paddingTop, setPaddingTop] = React.useState(0);
  const insets = useSafeAreaInsets();
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);

  useEffect(() => {
    const containerHeight: any =
      typeof height === 'string' ? (parseFloat(height) / 100) * screenHeight : height;

    if (containerHeight - horizontalScale(paddings.medium) > screenHeight - insets.top) {
      setPaddingTop(insets.top - (screenHeight - containerHeight));
    } else {
      setPaddingTop(horizontalScale(paddings.medium));
    }
  }, [height]);

  return (
    <Modal animationType='slide' transparent={true} visible={visible}>
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: 'black', opacity: 0.1 }}
        onPress={onPress}
      />
      <View style={[style.modalContent, { height, paddingTop }]}>
        <View style={style.iconButtonContainer}>
          <View
            style={{
              height: 5,
              backgroundColor: colors.divider,
              width: '20%',
              position: 'absolute',
              left: '40%',
              right: '40%',
              borderRadius: borderRadius.large,
            }}></View>
          <Atoms.IconButton icon='close' onPress={onPress} />
        </View>
        {children}
      </View>
    </Modal>
  );
}
