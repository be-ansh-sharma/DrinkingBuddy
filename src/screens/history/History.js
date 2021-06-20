import React from 'react';
import { ScrollView } from 'react-native';
import styles from './History.style';
import Chart from 'components/history/chart/Chart';
import Statistics from 'components/statistics/Statistics';
import SmartBanner from 'components/banners/SmartBanner';

const History = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', flexGrow: 1 }}
        style={styles.container}>
        <Chart />
        <Statistics />
      </ScrollView>
      <SmartBanner />
    </>
  );
};

export default History;
