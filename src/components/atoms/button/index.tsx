import { useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import theme from '@styles/theme';

import { styles } from './styles';
import { IButton } from './types';

export default function Button({ text, onPress }: IButton) {
  const colors = theme.useTheme();
  const style = useMemo(() => styles(colors), [colors]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
}
