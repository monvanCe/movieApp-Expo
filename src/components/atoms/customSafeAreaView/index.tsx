import { Platform } from 'react-native';
import { SafeAreaView as SafeIos } from 'react-native';
import { SafeAreaView as SafeAndroid } from 'react-native-safe-area-context';

import theme from '@styles/theme';

export default function SafeAreaView() {
  const colors = theme.useTheme();
  const style = { backgroundColor: colors.background };
  return Platform.OS === 'ios' ? <SafeIos style={style} /> : <SafeAndroid style={style} />;
}
