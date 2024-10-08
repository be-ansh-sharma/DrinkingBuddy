import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: COLOR.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
