import { StyleSheet } from 'react-native';

import { borderRadius, paddings } from '@styles/sizes';

export const styles = (colors: ITheme) => {
  return StyleSheet.create({
    container: {
      height: 75,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      padding: paddings.small,
      borderRadius: borderRadius.small,
      backgroundColor: colors.surface,
      alignItems: 'center',
    },
  });
};
