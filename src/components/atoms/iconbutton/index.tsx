import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import sizes from '@styles/sizes';
import theme from '@styles/theme';

import { styles } from './styles';

interface props extends IIcon, IOnPress {}

export default function IconButton({ icon, onPress }: props) {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);
  const { fontSizes } = sizes;

  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={icon as any} size={fontSizes.large} color={colors.primaryText} />
    </TouchableOpacity>
  );
}
