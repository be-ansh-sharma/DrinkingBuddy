import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styles from './History.style';
import Chart from 'components/history/chart/Chart';
import Statistics from 'components/statistics/Statistics';
import SmartBanner from 'components/banners/SmartBanner';

const History = ({ navigation }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (showBanner === false) {
        setShowBanner(true);
      }
    });

    return unsubscribe;
  }, [navigation, showBanner]);

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
      {showBanner && <SmartBanner />}
    </>
  );
};

export default History;
