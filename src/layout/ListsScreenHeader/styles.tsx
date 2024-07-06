import { StyleSheet } from 'react-native';

import metricEngine from '@styles/metricEngine';
import sizes from '@styles/sizes';

export const styles = (colors: ITheme) => {
  const { paddings } = sizes;

  return StyleSheet.create({
    container: {
      paddingVertical: metricEngine.verticalScale(paddings.small),
      paddingHorizontal: metricEngine.horizontalScale(paddings.small),

      zIndex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: metricEngine.horizontalScale(paddings.small),
    },
    text: {
      color: colors.primaryText,
    },
  });
};
