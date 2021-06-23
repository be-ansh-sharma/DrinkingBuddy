import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';
export default StyleSheet.create({
  container: {
    width: '100%',
  },
  add: {
    height: 60,
    alignSelf: 'center',
    marginTop: 20,
    flexShrink: 2,
    width: 80,
  },
  change: {
    flexDirection: 'row',
    width: 60,
    height: '100%',
    position: 'absolute',
    right: -20,
    top: '-80%',
    alignContent: 'center',
    alignItems: 'center',
  },
  ads: {
    width: 60,
    position: 'absolute',
    left: -20,
    top: -60,
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
