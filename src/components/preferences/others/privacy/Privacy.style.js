import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignSelf: 'center',
  },
  tile: {
    fontSize: 40,
    color: COLOR.primary,
    textAlign: 'center',
    lineHeight: 60,
  },
  description: {
    marginTop: 20,
    textAlign: 'justify',
  },
  permission: {
    marginTop: 10,
  },
  item: {
    paddingTop: 5,
  },
});
