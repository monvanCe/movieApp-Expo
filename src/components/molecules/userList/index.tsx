import { useMemo } from 'react';
import { Text, View } from 'react-native';

import ImageStack from '@components/atoms/imageStack';
import theme from '@styles/theme';

import { styles } from './styles';

interface props extends IImages, IText {}

export default function UserList({ images, text }: props) {
  const colors = theme.useTheme();
  const style = useMemo(() => styles(colors), [colors]);
  return (
    <View style={style.container}>
      <View style={{ width: '100%', aspectRatio: 2 }}>
        <ImageStack images={images} />
      </View>
      <Text numberOfLines={2} style={style.text}>
        {text}
      </Text>
    </View>
  );
}
