import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { onboarding } from './const/routeNames';
import { store, useAppDispatch, useAppSelector } from './store/store';
import { setCurrentUser } from './store/userSlice';
import { Provider } from 'react-redux';

function Page() {
  const [count, setCount] = React.useState(0);
  const [ip, setIp] = React.useState('');
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.currentUser);

  // Update count every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Fetch IP address
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((data) => setIp(data.ip));

    return () => clearInterval(interval);
  }, []);

  const setUser = async () => {
    const randomUser = await fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => data.results[0]);

    const formattedUser = {
      id: randomUser.login.uuid,
      name: randomUser.name.first,
      surname: randomUser.name.last,
      email: randomUser.email,
    };

    dispatch(setCurrentUser(formattedUser));
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text>Count: {count}</Text>
        <Text>Your IP: {ip}</Text>
        <Button title="Go to home" onPress={() => router.push(onboarding)} />
        <Button title="Set user" onPress={setUser} />
        <Text>
          User Name: {user?.name} {user?.surname}{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});

const WrappedPage = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);

export default WrappedPage;
