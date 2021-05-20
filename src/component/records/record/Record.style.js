import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 40,
    //borderWidth: 1,
    width: '100%',
    //justifyContent: 'center',
    flexDirection: 'row',
    //alignContent: 'space-between',
    justifyContent: 'space-around',
    //alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#459dfc',
    borderRadius: 5,
    elevation: 6,
    marginTop: 8,
  },
  time: {
    color: 'white',
  },
  icon: {
    color: 'white',
  },
  amount: {
    color: 'white',
  },
  subText: {
    color: 'white',
    fontSize: 10,
  }
});
