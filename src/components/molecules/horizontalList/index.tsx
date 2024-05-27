import { useMemo } from 'react';
import { FlatList, Image } from 'react-native';

import imageSources from '@const/imageSources';
import theme from '@styles/theme';
import { View } from 'moti';

import { styles } from './styles';
import { IHorizontalList } from './types';

export default function HorizontalList({ movies }: IHorizontalList) {
  const colors = theme.useTheme();
  const style = useMemo(() => styles(colors), [colors]);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={movies}
      keyExtractor={item => item.id.toString()}
      horizontal
      renderItem={({ item }) => (
        <View style={style.container}>
          <Image source={{ uri: imageSources.lowResImage(item.posterPath) }} style={style.image} />
        </View>
      )}
    />
  );
}
