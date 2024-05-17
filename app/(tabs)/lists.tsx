import { View, Text } from 'react-native';
import { useAppSelector } from '../../src/store/store';
import Header from '../../src/components/organism/ListsScreenHeader.tsx';

export default function Tab() {
  const username = useAppSelector((state) => state.auth.currentUser?.username);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Header />
      <Text>Tab Home {username}</Text>
    </View>
  );
}
