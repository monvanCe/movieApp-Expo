import React from 'react';
import { Text, View } from 'react-native';

import ImageStack from '@components/atoms/imageStack';
import { lowResImage } from '@const/imageSources';
import Header from '@layout/ListsScreenHeader';
import { useAppSelector } from '@store/store';
import { borderRadius, paddings } from '@styles/sizes';
import theme from '@styles/theme';

export default function List() {
  const nowPlayingMovies = useAppSelector(state => state.movies.nowPlaying);
  const color = theme.useTheme();
  return (
    <>
      <Header />
      <View style={{ flex: 1 }}>
        <View
          style={{
            borderWidth: 1,
            padding: paddings.medium,
            borderColor: color.border,
            borderRadius: borderRadius.medium,
            width: '33%',
            aspectRatio: 0.75,
            justifyContent: 'space-between',
          }}>
          <View style={{ width: '100%', aspectRatio: 2 }}>
            <ImageStack
              images={
                nowPlayingMovies?.map(movie => lowResImage(movie.posterPath)).slice(0, 5) || []
              }
            />
          </View>
          <Text numberOfLines={2} style={{ color: color.primaryText }}>
            Ölmeden Önce İzlenecekler
          </Text>
        </View>
      </View>
    </>
  );
}
