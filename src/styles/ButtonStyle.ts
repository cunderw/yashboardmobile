import {StyleSheet} from 'react-native';

const ButtonStyle = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#273469',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#EBF2FA',
  },
  rightHeaderButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  rightHeaderButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: '#EBF2FA',
  },
  leftHeaderButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  leftHeaderButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: '#EBF2FA',
  },
});

export default ButtonStyle;
