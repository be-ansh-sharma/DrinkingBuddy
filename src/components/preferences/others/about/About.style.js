import { COLOR } from 'global/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 40,
  },
  appContainer: {
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLOR.primary,
    marginVertical: 20,
    fontSize: 16,
  },
  links: {
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  linkContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    padding: 16,
  },
  image: {
    resizeMode: 'center',
  },
});
