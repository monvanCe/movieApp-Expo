import { useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import ImageStack from '@components/atoms/imageStack';
import theme from '@styles/theme';

import { styles } from './styles';

interface props extends IImages, IText, IOnPress {}

export default function UserList({ images, text, onPress }: props) {
  const colors = theme.useTheme();
  const style = useMemo(() => styles(colors), [colors]);
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <View style={{ width: '100%', aspectRatio: 2 }}>
        <ImageStack images={images} />
      </View>
      <Text numberOfLines={2} style={style.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
