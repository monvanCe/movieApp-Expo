import { Text, TouchableOpacity } from 'react-native';

import theme from '@styles/theme';

import { styles } from './styles';
import { IButton } from './types';

export default function ({ text, onPress }: IButton) {
  const colors = theme.useTheme();
  const style = styles(colors);

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
}
