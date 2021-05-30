import { StyleSheet } from 'react-native';
import { COLOR } from '../../../../global/styles';

export default StyleSheet.create({
  animation: {
    height: 70,
  },
  cupWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  badge: {
    backgroundColor: 'grey',
    color: 'white',
  },
  badgeSelected: {
    backgroundColor: COLOR.accent,
  },
  badgeText: {
    textAlign: 'center',
    marginTop: 10,
    color: 'gray',
  },
  badgeTextSelected: {
    color: COLOR.accent,
  },
});
