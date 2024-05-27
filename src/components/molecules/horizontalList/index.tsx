import React from 'react';
import { FlatList, View } from 'react-native';

import metricEngine from '@styles/metricEngine';
import sizes from '@styles/sizes';
import theme from '@styles/theme';
import { Skeleton } from 'moti/skeleton';

import PosterItem from '../posterItem';
import SkeletonItem from '../skeletonItem';
import { styles } from './styles';
import { IHorizontalList } from './types';

export default function HorizontalList({ movies }: IHorizontalList) {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={movies}
      keyExtractor={item => item.id.toString()}
      horizontal
      renderItem={({ item }) => <PosterItem movie={item} />}
      ListEmptyComponent={() => (
        <View style={{ flexDirection: 'row' }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <SkeletonItem key={index} />
          ))}
        </View>
      )}
    />
  );
}
