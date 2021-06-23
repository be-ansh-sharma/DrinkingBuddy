import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  progress: {
    position: 'absolute',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 6,
  },
  progressWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  pending: {
    color: COLOR.primary,
  },
});
