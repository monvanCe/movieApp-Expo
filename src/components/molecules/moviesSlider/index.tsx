import React from 'react';
import { Text, View } from 'react-native';

import theme from '@styles/theme';

import HorizontalList from '../horizontalList';
import { styles } from './styles';
import { IMoviesSlider } from './types';

export default function MoviesSlider({ movies, title }: IMoviesSlider) {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);

  return (
    <View>
      <Text style={style.text}>{title}</Text>
      <View style={style.horizontalContainer}>
        <HorizontalList movies={movies} />
      </View>
    </View>
  );
}
