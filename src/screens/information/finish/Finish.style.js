import { StyleSheet } from 'react-native';
import { COLOR } from '../../../global/styles';

export default StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR.background,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR.background,
    paddingHorizontal: '8%',
  },
  loader: {
    height: 200,
    width: 200,
  },
  itemContainer: {
    //borderWidth: 1,
    marginTop: '15%',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    marginVertical: 8,
  },
});
