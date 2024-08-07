import { StyleSheet } from 'react-native';

import metricEngine from '@styles/metricEngine';
import sizes from '@styles/sizes';

export const styles = (colors: ITheme) => {
  const { fontSizes } = sizes;

  return StyleSheet.create({
    text: {
      color: colors.primaryText,
      textAlign: 'center',
      fontSize: metricEngine.moderateScale(fontSizes.medium),
    },
  });
};
