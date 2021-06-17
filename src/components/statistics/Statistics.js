import React from 'react';
import { View } from 'react-native';
import Intake from 'components/statistics/cards/intake/Intake';
import Completion from 'components/statistics/cards/completion/Completion';
import Times from 'components/statistics/cards/times/Times';
import styles from './Statistics.style';

const Statistics = () => {
  return (
    <View style={styles.container}>
      <Intake />
      <Completion />
      <Times />
    </View>
  );
};

export default Statistics;
