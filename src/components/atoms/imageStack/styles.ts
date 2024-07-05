import { StyleSheet } from 'react-native';

import { borderRadius } from '@styles/sizes';
import { ITheme } from '@styles/types';

export const styles = (colors: ITheme) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      overflow: 'hidden',
    },
    item: {
      aspectRatio: 1,
      borderRadius: borderRadius.small,
    },
  });
};
