import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Dropdown from '../../components/atoms/dropdown';
import { horizontalScale, verticalScale } from '../../styles/metricEngine';
import { paddings } from '../../styles/sizes';

export default function () {
  const [selectedValue, setSelectedValue] = useState<string>();

  return (
    <View style={styles.container}>
      <Text>Lists: </Text>
      <Dropdown
        items={['item 1', 'item 2', 'item 3']}
        value={selectedValue}
        onChange={e => setSelectedValue(e)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(paddings.small),
    paddingHorizontal: horizontalScale(paddings.small),
    backgroundColor: 'white',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(paddings.small),
  },
});
