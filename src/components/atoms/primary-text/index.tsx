import { Text, TextProps } from 'react-native';

import { fontSizes } from '@styles/sizes';
import theme from '@styles/theme';

export default function PrimaryText(props: TextProps) {
  const colors = theme.useTheme();

  return (
    <Text
      {...props}
      style={[{ fontSize: fontSizes.large, color: colors.primaryText }, props.style]}>
      {props.children}
    </Text>
  );
}
