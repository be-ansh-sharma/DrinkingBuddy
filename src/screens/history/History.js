import React from 'react';
import { View } from 'react-native';
import styles from './History.style';
import Chart from 'components/history/chart/Chart';

const History = () => {
  return (
    <View style={styles.container}>
      <View>
        <Chart />
      </View>
    </View>
  );
};

export default History;
