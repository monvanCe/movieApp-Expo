import React from 'react';
import { Text, View } from 'react-native';

import Atoms from '@components/atoms';
import Molecules from '@components/molecules';
import { lowResImage } from '@const/imageSources';
import Header from '@layout/ListsScreenHeader';
import { useAppSelector } from '@store/store';
import { borderRadius, borderWidths, fontSizes, paddings } from '@styles/sizes';
import theme from '@styles/theme';

export default function List() {
  const nowPlayingMovies = useAppSelector(state => state.movies.nowPlaying);
  const colors = theme.useTheme();
  const fakeUser: IUser = {
    id: '1',
    username: 'username',
    description: 'description',
  };

  return (
    <>
      <Header />
      <View style={{ flex: 1, padding: paddings.small, gap: paddings.medium }}>
        <View style={{ flexDirection: 'row', gap: paddings.small }}>
          <View style={{ width: '33%' }}>
            <Molecules.UserList
              onPress={() => {}}
              images={
                nowPlayingMovies?.map(movie => lowResImage(movie.posterPath)).slice(0, 5) || []
              }
              text='Ölmeden Önce İzlenecekler'
            />
          </View>
          <View style={{ width: '33%' }}>
            <Atoms.AddUserList onPress={() => {}} />
          </View>
        </View>
        <Molecules.CoList
          onPress={() => {}}
          user={fakeUser}
          images={nowPlayingMovies?.map(movie => lowResImage(movie.posterPath)).slice(0, 5) || []}
        />
      </View>
    </>
  );
}
