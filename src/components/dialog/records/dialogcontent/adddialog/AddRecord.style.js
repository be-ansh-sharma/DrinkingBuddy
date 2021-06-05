import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  title: {
    alignSelf: 'center',
    marginRight: 8,
    width: '20%',
  },
  titleText: {
    color: COLOR.primary,
  },
  picker: {
    width: '80%',
    flexGrow: 2,
    flexDirection: 'row',
  },
  pickerItem: {
    width: '50%',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  subContainer: {
    flexDirection: 'row',
  },
  input: {
    flexGrow: 2,
  },
  error: {
    color: COLOR.error,
    textAlign: 'center',
    marginTop: 8,
    fontSize: 12,
  },
});
