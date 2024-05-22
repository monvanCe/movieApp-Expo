import { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import useToggle from '../../../hooks/useToggle';
import { horizontalScale, moderateScale, verticalScale } from '../../../metrics/metricEngine';
import { borderRadius, fontSizes, paddings } from '../../../metrics/sizes';
import { IDropdown } from '../../types';

export default function ({ items, value, onChange }: IDropdown) {
  const { isToggle, close, toggle } = useToggle();
  const [height, setHeight] = useState(0);
  const dropdownRef = useRef(null);

  const getDropdownHeight = () => {
    if (dropdownRef.current) {
      const dropdown: any = dropdownRef.current;
      dropdown.measure((x: any, y: any, width: any, height: any, pageX: any, pageY: any) => {
        setHeight(height);
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        ref={dropdownRef}
        onPress={() => {
          toggle();
          getDropdownHeight();
        }}
        style={styles.dropdownButton}>
        <Text style={styles.dropdownButtonText}>{value || 'Select item'}</Text>
        <Ionicons
          name={isToggle ? 'caret-up' : 'caret-down'}
          size={moderateScale(fontSizes.small)}
        />
      </TouchableOpacity>
      {isToggle && (
        <View style={[styles.dropdownMenu, { top: height + 2 }]}>
          {items.map(item => (
            <>
              <TouchableOpacity
                style={styles.itemButton}
                onPress={() => {
                  onChange(item);
                  close();
                }}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
              {item !== items[items.length - 1] && (
                <View
                  style={{
                    height: 1,
                    backgroundColor: 'gray',
                  }}
                />
              )}
            </>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdownButton: {
    paddingHorizontal: horizontalScale(paddings.small),
    paddingVertical: verticalScale(paddings.small),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: borderRadius.small,
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(paddings.small),
  },
  dropdownButtonText: {
    fontSize: moderateScale(fontSizes.small),
  },
  dropdownMenu: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: borderRadius.small,
    backgroundColor: 'white',
    paddingHorizontal: horizontalScale(paddings.small),
  },
  itemButton: {
    paddingVertical: verticalScale(paddings.small),
  },
  itemText: {
    fontSize: moderateScale(fontSizes.small),
  },
});
