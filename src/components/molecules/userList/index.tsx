import { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import ImageStack from '@components/atoms/imageStack';
import SecondaryText from '@components/atoms/secondary-text';
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
      <SecondaryText numberOfLines={2} style={style.text}>
        {text}
      </SecondaryText>
    </TouchableOpacity>
  );
}
