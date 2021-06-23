import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  items: {
    width: 80,
    height: 50,
    borderWidth: 1,
    borderColor: COLOR.faded,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    padding: 8,
  },
  itemSelected: {
    borderColor: COLOR.primary,
    borderWidth: 2,
  },
});
