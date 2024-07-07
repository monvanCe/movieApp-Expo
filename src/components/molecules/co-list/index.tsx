import { useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import ImageStack from '@components/atoms/imageStack';
import { fontSizes, paddings } from '@styles/sizes';
import theme from '@styles/theme';

import { styles } from './styles';

interface props extends IImages, IOnPress {
  user: IUser;
}

export default function List({ images, user, onPress }: props) {
  const colors = theme.useTheme();
  const style = useMemo(() => styles(colors), [colors]);
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <View style={{ flex: 1, gap: paddings.small }}>
        <Text style={{ color: colors.primaryText, fontSize: fontSizes.medium }}>
          {user.username}
        </Text>
        <Text style={{ color: colors.tertiaryText }}>{user.description}</Text>
      </View>
      <View style={{ height: '75%' }}>
        <ImageStack images={images} />
      </View>
    </TouchableOpacity>
  );
}
