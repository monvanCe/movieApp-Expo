import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { IButton } from '../../types';

export default function ({ text, onPress }: IButton) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#007aff',
    textAlign: 'center',
    fontSize: 18,
  },
});
