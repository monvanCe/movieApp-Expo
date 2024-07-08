import { StyleSheet } from 'react-native';

import metricEngine from '@styles/metricEngine';
import sizes from '@styles/sizes';

export const styles = (colors: ITheme) => {
  const { horizontalScale } = metricEngine;
  const { borderRadius, paddings } = sizes;

  return StyleSheet.create({
    modalContainer: {
      width: '100%',
      backgroundColor: colors.surface,
      borderTopRightRadius: horizontalScale(borderRadius.large),
      borderTopLeftRadius: horizontalScale(borderRadius.large),
      bottom: 0,
      position: 'absolute',
      justifyContent: 'flex-end',
      paddingTop: paddings.medium,
    },
    iconButtonContainer: {
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalSlider: {
      height: 5,
      backgroundColor: colors.divider,
      width: '20%',
      position: 'absolute',
      left: '40%',
      right: '40%',
      borderRadius: borderRadius.large,
    },
  });
};
