import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { buttonI } from '../../types';

export default ({ text, onPress }: buttonI) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#007aff',
    textAlign: 'center',
    fontSize: 18,
  },
});
