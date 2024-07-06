import { StyleSheet } from 'react-native';

import { borderRadius, borderWidths, paddings } from '@styles/sizes';

export const styles = (colors: ITheme) => {
  return StyleSheet.create({
    container: {
      borderWidth: borderWidths.small,
      padding: paddings.medium,
      borderColor: colors.border,
      borderRadius: borderRadius.medium,
      width: '100%',
      aspectRatio: 0.75,
      justifyContent: 'space-between',
    },
    text: { color: colors.primaryText },
  });
};
