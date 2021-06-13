import React from 'react';
import { View, Dimensions } from 'react-native';
import styles from './BarChart.style';
import { COLOR } from 'global/styles';
import { BarChart as KitBarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const BarChart = ({ labels, datasets }) => {
  return (
    <View>
      <KitBarChart
        style={styles.chart}
        data={{
          labels: labels,
          datasets: [
            {
              data: datasets,
            },
          ],
        }}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: COLOR.accent,
          backgroundGradientFrom: COLOR.primary,
          backgroundGradientTo: COLOR.accent,
          decimalPlaces: 1,
          color: () => 'rgba(255, 255, 255, 0.4)',
          labelColor: () => 'rgba(255, 255, 255, 1)',
          style: {
            borderRadius: 16,
          },
        }}
      />
    </View>
  );
};

export default BarChart;
