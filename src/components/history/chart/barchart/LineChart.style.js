import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    elevation: 7,
  },
  darkChart: {
    transform: [{ translateX: -10 }],
  },
});
