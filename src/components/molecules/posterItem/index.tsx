import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import imageSources from '@const/imageSources';
import theme from '@styles/theme';

import { styles } from './styles';
import { IPosterItem } from './types';

export default function PosterItem({ movie }: IPosterItem) {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);

  return (
    <TouchableOpacity style={style.container}>
      <Image
        source={{ uri: imageSources.lowResImage(movie.posterPath) }}
        style={style.image}
        resizeMode='cover'
      />
    </TouchableOpacity>
  );
}
