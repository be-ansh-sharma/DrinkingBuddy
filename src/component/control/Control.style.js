import { StyleSheet } from 'react-native';
import { COLOR } from '../../global/styles';
export default StyleSheet.create({
  container: {
    //borderWidth: 1,
    //borderColor: '#00B0FF',
    width: '100%',
    //justifyContent: 'center',
    height: 100,
  },
  add: {
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    //borderWidth: 1,
    width: '100%',
    //borderRadius: 30,
    //elevation: 2,
    //paddingLeft: 2,
  },
  change: {
    flexDirection: 'row',
    //alignItems: 'flex-start',
    width: 60,
    height: '100%',
    //height: 60,
    position: 'absolute',
    right: -20,
    top: -80,
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
});
