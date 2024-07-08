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
      position: 'absolute',
      bottom: 0,
      justifyContent: 'flex-end',
      paddingTop: paddings.medium,
    },
    iconButtonContainer: {
      position: 'relative',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });
};
