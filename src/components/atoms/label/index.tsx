import { Text } from 'react-native';

import { fontSizes } from '@styles/sizes';
import theme from '@styles/theme';

export default function Label({ text, style }: { text: string; style?: any }) {
  const colors = theme.useTheme();

  return (
    <Text style={[{ fontSize: fontSizes.medium, color: colors.primaryText }, style]}>{text}</Text>
  );
}
