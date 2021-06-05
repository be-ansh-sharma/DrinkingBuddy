import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
  },
  weightWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '30%',
    height: 200,
  },
  picker: {
    width: '50%',
    flexGrow: 2,
    flexDirection: 'row',
    //margin: 10,
    marginRight: '10%',
  },
  pickerItem: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  icon: {
    width: '45%',
    aspectRatio: 1,
  },
});
