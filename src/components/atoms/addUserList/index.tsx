import { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { fontSizes } from '@styles/sizes';
import theme from '@styles/theme';

import { styles } from './styles';

interface props extends IOnPress {}

export default function AddUserList({ onPress }: props) {
  const colors = theme.useTheme();
  const style = useMemo(() => styles(colors), [colors]);
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <Ionicons name='add' size={fontSizes.large * 2} color={colors.primaryText} />
    </TouchableOpacity>
  );
}
