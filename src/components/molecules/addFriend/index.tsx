import { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import PrimaryText from '@components/atoms/primary-text';
import { Ionicons } from '@expo/vector-icons';
import useToggle from '@hooks/useToggle';
import useUser from '@hooks/useUser';
import { FlashList } from '@shopify/flash-list';
import { paddings } from '@styles/sizes';
import theme from '@styles/theme';

import CustomModal from '../customModal';

export default function AddFriend() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { toggle, isToggle, close } = useToggle();
  const colors = theme.useTheme();
  const { searchUsers, sendFriendshipRequest } = useUser();

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
    <View style={{}}>
      <TouchableOpacity onPress={toggle}>
        <Ionicons
          name='add-circle-outline'
          size={30}
          color={colors.primaryText}
          style={{ paddingRight: paddings.small }}
        />
      </TouchableOpacity>
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
              <PrimaryText>{item.userName}</PrimaryText>
            </TouchableOpacity>
          )}
          estimatedItemSize={20}
        />
      </CustomModal>
    </View>
  );
}
