import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import { Stack } from 'expo-router/stack';

import { store } from '../src/store/store';

function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: true }} />
    </Stack>
  );
}

export default function () {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}
