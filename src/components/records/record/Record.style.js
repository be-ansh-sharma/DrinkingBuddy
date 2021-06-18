import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';

export default StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLOR.accent,
    borderRadius: 5,
    elevation: 7,
    marginTop: 8,
  },
  time: {
    color: COLOR.background,
  },
  icon: {
    color: COLOR.background,
  },
  amount: {
    color: COLOR.background,
  },
  subText: {
    color: COLOR.background,
    fontSize: 10,
  },
  dialogText: {
    color: COLOR.accent,
  },
});
