import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
  },
  switch: {
    height: 50,
    width: 100,
  },
  selected: {
    color: COLOR.primary,
  },
});
