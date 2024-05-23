import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import sizes from '@styles/sizes';
import theme from '@styles/theme';
import { ITheme } from '@styles/types';

import Dropdown from '../../components/atoms/dropdown';
import metricEngine from '../../styles/metricEngine';

const { paddings } = sizes;

export default function () {
  const [selectedValue, setSelectedValue] = useState<string>();
  const colors = theme.useTheme();
  const style = styles(colors);

  return (
    <View style={style.container}>
      <Text style={style.text}>Lists: </Text>
      <Dropdown
        items={['item 1', 'item 2', 'item 3']}
        value={selectedValue}
        onChange={e => setSelectedValue(e)}
      />
    </View>
  );
}

const styles = (colors: ITheme) =>
  StyleSheet.create({
    container: {
      paddingVertical: metricEngine.verticalScale(paddings.small),
      paddingHorizontal: metricEngine.horizontalScale(paddings.small),
      backgroundColor: colors.background,
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
