import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';

export default StyleSheet.create({
  button: {
    backgroundColor: COLOR.primary,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: 30,
    marginVertical: 20,
    padding: 4,
    width: '70%',
    elevation: 12,
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    flexDirection: 'row',
  },
  buttonText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingRight: 15,
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});
