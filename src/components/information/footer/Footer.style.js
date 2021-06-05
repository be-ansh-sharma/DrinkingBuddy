import { StyleSheet } from 'react-native';
import { BUTTON } from 'global/styles';

export default StyleSheet.create({
  next: {
    ...BUTTON,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 20,
  },
  prev: {
    ...BUTTON,
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginLeft: 20,
  },
});
