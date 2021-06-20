import { StyleSheet } from 'react-native';
import { COLOR } from 'global/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '8%',
    backgroundColor: COLOR.background,
  },
  heading: {
    fontSize: 18,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 15,
  },
  button: {
    backgroundColor: COLOR.primary,
    alignSelf: 'center',
    //position: 'absolute',
    //bottom: 0,
    borderRadius: 30,
    marginVertical: 16,
    padding: 4,
    width: '70%',
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
    paddingRight: 10,
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});
