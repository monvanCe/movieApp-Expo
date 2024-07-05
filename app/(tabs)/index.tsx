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
              images={[
                'https://image.tmdb.org/t/p/w200/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
                'https://image.tmdb.org/t/p/w200/aCbFH1BfHjW14VxiA0ZmkNJTZKI.jpg',
                'https://image.tmdb.org/t/p/w200/qWWsxnHBajcAjSlL6EsHdtIBmf9.jpg',
                'https://image.tmdb.org/t/p/w200/qgB3vyMKLfpImQNdOtz4FrDD0a2.jpg',
                'https://image.tmdb.org/t/p/w200/aPjJeaJPNeH1F5u7RQXJJWYg9pA.jpg',
              ]}
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
