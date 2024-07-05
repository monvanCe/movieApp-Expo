import React from 'react';
import { View } from 'react-native';

import PosterItem from '@components/atoms/posterItem';
import SkeletonItem from '@components/atoms/skeletonItem';
import { FlashList } from '@shopify/flash-list';
import theme from '@styles/theme';

import { styles } from './styles';
import { IHorizontalList } from './types';

export default function HorizontalList({ movies }: IHorizontalList) {
  const colors = theme.useTheme();
  const style = React.useMemo(() => styles(colors), [colors]);

  return (
    <View style={{ flex: 1 }}>
      <FlashList
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
        estimatedItemSize={20}
      />
    </View>
  );
}
