import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import AddUserList from '@components/atoms/addUserList';
import PrimaryText from '@components/atoms/primary-text';
import UserList from '@components/molecules/userList';
import { lowResImage } from '@const/imageSources';
import { useAuth } from '@hooks/useAuth';
import Header from '@layout/ListsScreenHeader';
import { useAppSelector } from '@store/store';
import { paddings } from '@styles/sizes';

export default function List() {
  const { login } = useAuth();
  const nowPlayingMovies = useAppSelector(state => state.movies.nowPlaying);

  return (
    <>
      <Header />
      <View style={{ flex: 1, padding: paddings.small, gap: paddings.medium }}>
        <View style={{ flexDirection: 'row', gap: paddings.small }}>
          <View style={{ width: '33%' }}>
            <UserList
              onPress={() => {}}
              images={
                nowPlayingMovies?.map(movie => lowResImage(movie.posterPath)).slice(0, 5) || []
              }
              text='Ölmeden Önce İzlenecekler'
            />
          </View>
          <View style={{ width: '33%' }}>
            <AddUserList onPress={() => {}} />
          </View>
        </View>
        <PrimaryText>Friend List:</PrimaryText>
        <TouchableOpacity onPress={login}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
