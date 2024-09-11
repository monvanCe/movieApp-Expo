import { Text, TextProps } from 'react-native';

import { fontSizes } from '@styles/sizes';
import theme from '@styles/theme';

export default function SecondaryText(props: TextProps) {
  const colors = theme.useTheme();

  return (
    <Text
      {...props}
      style={[{ fontSize: fontSizes.medium, color: colors.tertiaryText }, props.style]}>
      {props.children}
    </Text>
  );
}
