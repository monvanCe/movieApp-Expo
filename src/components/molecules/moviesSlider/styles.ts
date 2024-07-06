import { StyleSheet } from 'react-native';

import metricEngine from '@styles/metricEngine';
import sizes from '@styles/sizes';

export const styles = (colors: ITheme) => {
  const { paddings, fontSizes } = sizes;
  const { horizontalScale, verticalScale, moderateScale } = metricEngine;

  return StyleSheet.create({
    text: {
      color: colors.primaryText,
      paddingLeft: horizontalScale(paddings.small),
      paddingVertical: verticalScale(paddings.small),
      fontSize: moderateScale(fontSizes.medium),
      fontWeight: 'bold',
    },
    horizontalContainer: {
      height: 150,
    },
  });
};
