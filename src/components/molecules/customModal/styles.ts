import { StyleSheet } from 'react-native';

import metricEngine from '@styles/metricEngine';
import sizes from '@styles/sizes';
import { ITheme } from '@styles/types';

export const styles = (colors: ITheme) => {
  const { horizontalScale, verticalScale, moderateScale } = metricEngine;
  const { borderRadius, paddings } = sizes;

  return StyleSheet.create({
    modalContent: {
      width: '100%',
      backgroundColor: colors.surface,
      borderTopRightRadius: horizontalScale(borderRadius.large),
      borderTopLeftRadius: horizontalScale(borderRadius.large),
      position: 'absolute',
      bottom: 0,
      padding: horizontalScale(paddings.large),
    },
    iconButtonContainer: {
      alignItems: 'flex-end',
    },
  });
};
