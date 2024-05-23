import { StyleSheet } from 'react-native';

import { ITheme } from '@styles/types';

export const styles = (colors: ITheme) =>
  StyleSheet.create({
    text: {
      color: colors.primaryText,
      textAlign: 'center',
      fontSize: 18,
    },
  });
