import { TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import theme from '@styles/theme';

import { styles } from './styles';
import { IIconButton } from './types';

export default function IconButton({ icon, onPress }: IIconButton) {
  const colors = theme.useTheme();
  const style = styles(colors);

  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={icon as any} size={24} color={style.text as any} />
    </TouchableOpacity>
  );
}
