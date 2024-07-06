import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import theme from '@styles/theme';

import { styles } from './styles';

interface props extends IText, IOnPress {}

export default function Button({ text, onPress }: props) {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
}
