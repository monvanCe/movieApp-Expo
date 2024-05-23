import { Text, View } from 'react-native';

import Header from '@layout/ListsScreenHeader';

export default function () {
  return (
    <>
      <Header />
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text>Tab Home</Text>
      </View>
    </>
  );
}
