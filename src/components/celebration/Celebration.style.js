import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  animation: {
    width: '100%',
  },
  text: {
    color: COLOR.primary,
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 40,
    textTransform: 'uppercase',
  },
  textContainer: {
    margin: 20,
    alignSelf: 'center',
  },
  subheading: {
    fontSize: 18,
  },
});
