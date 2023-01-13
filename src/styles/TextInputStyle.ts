import {StyleSheet} from 'react-native';

const TextInputStyle = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
});

export default TextInputStyle;
