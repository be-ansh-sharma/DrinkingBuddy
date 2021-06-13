import React from 'react';
import { Text, View } from 'react-native';
import styles from './History.style';
import Chart from 'components/history/chart/Chart';

const History = () => {
  return (
    <View style={styles.container}>
      <Chart />
    </View>
  );
};

export default History;
