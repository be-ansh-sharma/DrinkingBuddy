import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.primary,
    height: 150,
    borderRadius: 16,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  number: {
    fontSize: 70,
  },
  sub: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  light: {
    color: COLOR.background,
  },
  dark: {
    color: COLOR.primary,
  },
  darkContainer: {
    backgroundColor: null,
    borderColor: COLOR.primary,
    borderWidth: 1,
  },
});
