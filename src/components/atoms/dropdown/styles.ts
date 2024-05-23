import { StyleSheet } from 'react-native';

import metricEngine from '@styles/metricEngine';
import sizes from '@styles/sizes';
import { ITheme } from '@styles/types';

export const styles = (colors: ITheme) => {
  const { paddings, fontSizes, borderRadius, borderWidths } = sizes;

  return StyleSheet.create({
    container: {
      position: 'relative',
    },
    dropdownButton: {
      paddingHorizontal: metricEngine.horizontalScale(paddings.small),
      paddingVertical: metricEngine.verticalScale(paddings.small),
      borderWidth: borderWidths.small,
      borderColor: colors.border,
      borderRadius: borderRadius.small,
      flexDirection: 'row',
      alignItems: 'center',
      gap: metricEngine.horizontalScale(paddings.small),
      backgroundColor: colors.background,
    },
    dropdownButtonText: {
      fontSize: metricEngine.moderateScale(fontSizes.small),
      color: colors.primaryText,
    },
    dropdownMenu: {
      position: 'absolute',
      left: 0,
      right: 0,
      borderWidth: borderWidths.small,
      borderColor: colors.border,
      borderRadius: borderRadius.small,
      backgroundColor: colors.surface,
      paddingHorizontal: metricEngine.horizontalScale(paddings.small),
    },
    itemButton: {
      paddingVertical: metricEngine.verticalScale(paddings.small),
    },
    itemText: {
      fontSize: metricEngine.moderateScale(fontSizes.small),
      color: colors.primaryText,
    },
  });
};
