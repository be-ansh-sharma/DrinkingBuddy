import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  weightWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '30%',
  },
  picker: {
    width: '50%',
    flexGrow: 2,
    flexDirection: 'row',
    //justifyContent: 'center',
    borderWidth: 1,
  },
  pickerItem: {
    width: '20%',
    //justifyContent: 'flex-end',
    flexShrink: 2,
    //alignItems: 'flex-end',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignSelf: 'center',
  },
  icon: {
    width: '45%',
    aspectRatio: 1,
  },
});
