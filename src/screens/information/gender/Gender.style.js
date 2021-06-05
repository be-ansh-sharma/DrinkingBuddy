import { StyleSheet } from 'react-native';
import { COLOR, BUTTON } from 'global/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
  },
  heading: {
    marginTop: '20%',
    alignSelf: 'center',
    fontSize: 24,
    color: COLOR.primary,
  },
  avatarContainer: {
    //alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    //borderWidth: 1,
    marginTop: '30%',
  },
  male: {
    width: '45%',
    aspectRatio: 1,
    transform: [{ rotate: '15deg' }],
    //borderWidth: 1,
  },
  female: {
    transform: [{ rotate: '8deg' }],
    width: '45%',
    //borderWidth: 1,
    aspectRatio: 1,
  },
  next: {
    ...BUTTON,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 20,
  },
  prev: {
    ...BUTTON,
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginLeft: 20,
  },
});
