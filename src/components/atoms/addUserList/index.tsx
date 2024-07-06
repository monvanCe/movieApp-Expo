import { useMemo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';
import theme from '@styles/theme';

import { styles } from './styles';

interface props extends IOnPress {}

export default function AddUserList({ onPress }: props) {
  const colors = theme.useTheme();
  const style = useMemo(() => styles(colors), [colors]);
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <Ionicons name='add' size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}
