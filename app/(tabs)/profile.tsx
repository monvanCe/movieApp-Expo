import { Text, View } from 'react-native';

import PrimaryText from '@components/atoms/primary-text';
import { useAppSelector } from '@store/store';

export default function Profile() {
  const userName = useAppSelector(state => state.auth.currentUser?.userName);
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <PrimaryText>Profile</PrimaryText>
      <PrimaryText>{userName}</PrimaryText>
    </View>
  );
}
