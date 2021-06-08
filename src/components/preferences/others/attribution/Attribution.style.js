import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  heading: {
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 25,
  },
  list: {
    marginTop: 8,
    alignSelf: 'center',
  },
  listitem: {
    marginTop: 4,
    height: 25,
  },
  hyper: {
    color: COLOR.primary,
    textDecorationLine: 'underline',
  },
  listText: {
    textAlign: 'center',
  },
});
