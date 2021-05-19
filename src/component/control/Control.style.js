import { StyleSheet } from 'react-native';
import { COLOR } from '../../global/styles';
export default StyleSheet.create({
  container: {
    //borderWidth: 1,
    //borderColor: '#00B0FF',
    width: '100%',
    //justifyContent: 'center',
    //flexGrow: 2,
  },
  add: {
    height: 60,
    //alignContent: 'center',
    //alignItems: 'center',
    //alignSelf: 'center',
    //justifyContent: 'center',
    borderWidth: 1,
    //width: '100%',
    marginTop: 20,
    //borderBottomWidth: 1,
  },
  change: {
    flexDirection: 'row',
    //alignItems: 'flex-start',
    width: 60,
    height: '100%',
    //height: 60,
    position: 'absolute',
    right: -20,
    top: '-80%',
    alignContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
  },
  ads: {
    width: 60,
    position: 'absolute',
    left: -20,
    top: -60,
    //borderWidth: 1,
    alignItems: 'center',
  },
  adsText: {
    fontSize: 10,
    textAlign: 'center',
    color: COLOR.primary,
  },
  superText: {
    position: 'relative',
    top: -12,
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 10,
  },
});
