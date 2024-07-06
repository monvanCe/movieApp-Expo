import React from 'react';
import { TouchableOpacity } from 'react-native';

import imageSources from '@const/imageSources';
import theme from '@styles/theme';
import { Image } from 'expo-image';

import { styles } from './styles';

export default function PosterItem({ movie }: { movie: IMovie }) {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);

  return (
    <TouchableOpacity activeOpacity={1} style={style.container}>
      <Image source={{ uri: imageSources.lowResImage(movie.posterPath) }} style={style.image} />
    </TouchableOpacity>
  );
}
