import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width: screenWidth - (5 / 100) * screenWidth,
    marginBottom: 8,
  },
});
