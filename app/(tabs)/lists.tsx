import { View, Text } from 'react-native';
import { useAppSelector } from '../../src/store/store';
import Header from '../../src/components/molecules/ListsScreenHeader.tsx';

export default function () {
  const username = useAppSelector((state) => state.auth.currentUser?.username);

  return (
    <>
      <Header />
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text>Tab Home {username}</Text>
      </View>
    </>
  );
}
