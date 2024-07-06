import React from 'react';
import { View } from 'react-native';

import Molecules from '@components/molecules';
import { lowResImage } from '@const/imageSources';
import Header from '@layout/ListsScreenHeader';
import { useAppSelector } from '@store/store';

export default function List() {
  const nowPlayingMovies = useAppSelector(state => state.movies.nowPlaying);

  return (
    <>
      <Header />
      <View style={{ flex: 1 }}>
        <View style={{ width: '33%' }}>
          <Molecules.UserList
            images={nowPlayingMovies?.map(movie => lowResImage(movie.posterPath)).slice(0, 5) || []}
            text='Ölmeden Önce İzlenecekler'
          />
        </View>
      </View>
    </>
  );
}
