import { StyleSheet } from 'react-native';
import { COLOR } from '../../../global/styles';

export default StyleSheet.create({
  container: {
    height: 40,
    //borderWidth: 1,
    width: '100%',
    //justifyContent: 'center',
    flexDirection: 'row',
    //alignContent: 'space-between',
    justifyContent: 'space-around',
    //alignContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.accent,
    borderRadius: 5,
    elevation: 6,
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
