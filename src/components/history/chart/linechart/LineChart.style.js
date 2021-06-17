import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    marginTop: 8,
    borderRadius: 16,
    elevation: 10,
  },
  darkChart: {
    transform: [{ translateX: -10 }],
  },
});
