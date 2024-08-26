import { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import PrimaryText from '@components/atoms/primary-text';
import CustomModal from '@components/molecules/customModal';
import { Ionicons } from '@expo/vector-icons';
import useMovies from '@hooks/useMovies';
import useToggle from '@hooks/useToggle';
import { FlashList } from '@shopify/flash-list';
import { useAppSelector } from '@store/store';
import { paddings } from '@styles/sizes';
import theme from '@styles/theme';

export default function Friendlist() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const friends = useAppSelector(state => state.movies.friends);
  const { loadFriends, searchUsers, sendFriendshipRequest } = useMovies();
  const { toggle, isToggle, close } = useToggle();
  const colors = theme.useTheme();

  useEffect(() => {
    loadFriends();
  }, []);

  useEffect(() => {
    console.log(friends);
  }, [friends]);

  useEffect(() => {
    if (searchTerm.length < 3) {
      return;
    }

    const time = setTimeout(() => {
      searchUsers(searchTerm).then(users => {
        setUsers(users);
      });
    }, 1000);

    return () => clearTimeout(time);
  }, [searchTerm]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={toggle}>
          <Ionicons
            name='add-circle-outline'
            size={30}
            color={colors.primaryText}
            style={{ paddingRight: paddings.small }}
          />
        </TouchableOpacity>
        <PrimaryText>Friend List</PrimaryText>
      </View>
      <FlashList
        data={friends}
        renderItem={({ item, index }: { item: any; index: number }) => (
          <PrimaryText>{item.name}</PrimaryText>
        )}
      />
      <CustomModal visible={isToggle} onPress={close} height={'100%'}>
        <TextInput
          style={{
            marginTop: 16,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: '100%',
            borderRadius: 8,
            paddingHorizontal: 16,
            color: colors.primaryText,
          }}
          placeholder='Search'
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <FlashList
          data={users}
          renderItem={({ item, index }: { item: any; index: number }) => (
            <TouchableOpacity onPress={() => sendFriendshipRequest(item._id)}>
              <PrimaryText>{item.name}</PrimaryText>
            </TouchableOpacity>
          )}
        />
      </CustomModal>
    </View>
  );
}
