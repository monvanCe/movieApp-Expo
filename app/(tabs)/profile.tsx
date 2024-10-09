import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import Button from '@components/atoms/button';
import PrimaryText from '@components/atoms/primary-text';
import SecondaryText from '@components/atoms/secondary-text';
import CustomInput from '@components/atoms/text-input';
import CustomModal from '@components/molecules/customModal';
import useToggle from '@hooks/useToggle';
import useUser from '@hooks/useUser';
import { useAppSelector } from '@store/store';
import { borderRadius, borderWidths, margins, paddings } from '@styles/sizes';
import theme from '@styles/theme';
import { Image } from 'expo-image';

export default function Profile() {
  const user = useAppSelector(state => state.auth.currentUser);
  const avatars = useAppSelector(state => state.appConfig.avatars);
  const movies = useAppSelector(state => state.movies);
  const [newUser, setNewUser] = useState<Record<string, any> | null>(user);
  const { updateUser } = useUser();

  const allWatchlistMovieCount =
    movies.user.watchlist.length + movies.friends.reduce((acc, f) => acc + f.watchlist.length, 0);
  const allWatchedMovieCount =
    movies.user.watched.length + movies.friends.reduce((acc, f) => acc + f.watched.length, 0);

  const colors = theme.useTheme();
  const { toggle, isToggle } = useToggle();
  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <PrimaryText>{user?.userName}</PrimaryText>

      <View
        style={{
          width: '90%',
          height: 1,
          backgroundColor: colors.border,
          marginVertical: margins.medium,
        }}
      />

      <View
        style={{
          borderRadius: 999,
          overflow: 'hidden',
          padding: paddings.medium,
          borderWidth: borderWidths.small,
          borderColor: colors.divider,
          width: '33%',
          aspectRatio: 1,
        }}>
        <Image
          source={{ uri: user?.avatarId?.toString() }}
          style={{ width: '100%', height: '100%' }}
        />
      </View>

      <View style={{ marginTop: margins.medium, alignItems: 'center' }}>
        <SecondaryText>{'#' + user?.rollbackId}</SecondaryText>
        <Text style={{ color: colors.tertiaryText, opacity: 0.5 }}>This is your recovery key!</Text>
      </View>

      <View
        style={{
          width: '90%',
          height: 100,
          padding: paddings.medium,
          borderWidth: borderWidths.small,
          borderColor: colors.divider,
          borderRadius: borderRadius.medium,
          marginTop: margins.medium,
          borderStyle: 'dashed',
        }}>
        <SecondaryText>{'Bio: ' + user?.bio}</SecondaryText>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: margins.large,
        }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <PrimaryText>{allWatchlistMovieCount}</PrimaryText>
          <SecondaryText>Total Watchlist</SecondaryText>
        </View>
        <View
          style={{
            width: 1,
            height: '100%',
            backgroundColor: colors.border,
          }}
        />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <PrimaryText>{allWatchedMovieCount}</PrimaryText>
          <SecondaryText>Total Watched</SecondaryText>
        </View>
      </View>

      <Button
        overrideStyle={{
          flexDirection: 'row',
          marginTop: margins.large,
          width: '90%',
          justifyContent: 'center',
          paddingVertical: paddings.medium,
          borderWidth: borderWidths.small,
          borderColor: colors.divider,
        }}
        text='Edit Profile'
        onPress={toggle}
      />

      <CustomModal visible={isToggle} onPress={toggle} height={'100%'}>
        <View style={{ flex: 1 }}>
          <View style={{ gap: paddings.small }}>
            <PrimaryText>Username</PrimaryText>
            <CustomInput
              placeholder='Username'
              value={newUser?.userName}
              onChangeText={text => setNewUser({ ...newUser, userName: text })}
            />
          </View>

          <View style={{ marginTop: margins.medium, gap: paddings.small }}>
            <PrimaryText>Avatar</PrimaryText>
            <FlatList
              contentContainerStyle={{ gap: 10 }}
              showsHorizontalScrollIndicator={false}
              data={avatars}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setNewUser({ ...newUser, avatarId: item })}
                  style={{
                    borderWidth: borderWidths.medium,
                    borderColor: newUser?.avatarId === item ? colors.primary : colors.border,
                    borderRadius: borderRadius.medium,
                  }}>
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                    }}
                    source={{ uri: item }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <View
            style={{
              marginTop: margins.medium,
              gap: paddings.small,
            }}>
            <PrimaryText>Bio</PrimaryText>
            <CustomInput
              placeholder='Bio...'
              value={newUser?.bio}
              onChangeText={text => setNewUser({ ...newUser, bio: text })}
            />
          </View>
        </View>
        <Button
          overrideStyle={{
            width: '100%',
            paddingVertical: paddings.medium,
          }}
          text='Save'
          onPress={() => {
            updateUser(newUser);
            toggle();
          }}
        />
      </CustomModal>
    </View>
  );
}
