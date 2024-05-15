import { Stack } from 'expo-router/stack';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: true }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
    </Stack>
  );
}
