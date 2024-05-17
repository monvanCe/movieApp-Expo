import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../src/store/store';
import { setCurrentUser } from '../src/store/userSlice';
import Button from '../src/components/atoms/button';
import { bottomTabs } from '../src/const/routeNames';

export default function () {
  const [count, setCount] = React.useState(0);
  const [ip, setIp] = React.useState('');
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.currentUser);

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
      username: randomUser.login.username,
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
        <Button text="Go to bottom" onPress={() => router.push(bottomTabs)} />
        <Button text="Set user" onPress={setUser} />
        <Text>User Name: {user?.username || 'No user set'}</Text>
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
