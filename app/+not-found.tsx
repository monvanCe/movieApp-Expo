import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import routeNames from '@const/routeNames';
import i18n from '@localization/index';
import { Stack, useRouter } from 'expo-router';

export default function NotFoundScreen() {
  const route = useRouter();
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />

      <TouchableOpacity style={styles.link} onPress={() => route.replace(routeNames.bottomTabs)}>
        <Text>{i18n.t('unmatchedRoute')}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
