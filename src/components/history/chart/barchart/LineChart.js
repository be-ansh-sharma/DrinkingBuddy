import React, { useEffect, useState, useCallback } from 'react';
import { View, Dimensions } from 'react-native';
import styles from './LineChart.style';
import { COLOR } from 'global/styles';
import { LineChart as KitLineChart } from 'react-native-chart-kit';
import { useSelector } from 'react-redux';
import dayjs from 'global/day';
import { changeWaterSystem } from 'global/helpers/helper';
import { Text } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;

const LineChart = ({ rows, storedWeightType }) => {
  const darkMode = useSelector(state => state.information.darkMode);
  const [labels, setLabels] = useState([]);
  const [dataSets, setDataSets] = useState([]);

  useEffect(() => {
    generateXAxis();
    generateYAxis(rows, storedWeightType);
  }, [generateXAxis, generateYAxis, rows, storedWeightType]);

  const generateXAxis = useCallback(() => {
    let daysInMonth = dayjs().daysInMonth();
    let currentLabels = Array.from(Array(daysInMonth), (_, index) =>
      (++index).toString(),
    );
    setLabels(currentLabels);
  }, []);

  const generateYAxis = useCallback((data, currentWeightType) => {
    const daysInMonth = dayjs().daysInMonth();
    const currentDataSets = Array.from(Array(daysInMonth), (_, index) => {
      let day = dayjs()
        .date(++index)
        .date();
      let set;

      for (let i = 0; i < data.length; ++i) {
        let { completed, weightType, date, dailyGoal } = data[i];
        if (dayjs(date).date() === day) {
          if (currentWeightType === 'Kg') {
            if (weightType !== 'Kg') {
              completed = changeWaterSystem(completed, currentWeightType);
              dailyGoal = changeWaterSystem(dailyGoal, currentWeightType);
            }
            set = (completed / dailyGoal) * 100;
          } else {
            if (weightType !== 'lbs') {
              completed = changeWaterSystem(completed, currentWeightType);
              dailyGoal = changeWaterSystem(dailyGoal, currentWeightType);
            }
            set = (completed / dailyGoal) * 100;
          }
        }
      }
      return set || 0;
    });
    setDataSets(currentDataSets);
  }, []);

  if (!labels.length || !dataSets.length) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View>
      <KitLineChart
        style={
          darkMode ? { ...styles.chart, ...styles.darkChart } : styles.chart
        }
        data={{
          labels: labels,
          datasets: [
            {
              data: dataSets,
            },
            {
              data: [0],
              color: () => 'rgba(0, 0, 0, 0)',
            },
            {
              data: [100],
              color: () => 'rgba(0, 0, 0, 0)',
            },
          ],
        }}
        width={screenWidth - (5 / 100) * screenWidth}
        formatXLabel={value => (value % 2 === 0 ? value : '')}
        height={220}
        yLabelsOffset={20}
        yAxisSuffix="%"
        withVerticalLines={false}
        chartConfig={{
          backgroundColor: darkMode ? COLOR.dark : COLOR.background,
          backgroundGradientFrom: darkMode ? COLOR.dark : COLOR.primary,
          backgroundGradientTo: darkMode ? COLOR.dark : COLOR.accent,
          decimalPlaces: 0,
          color: () =>
            darkMode ? 'rgb(0, 176, 255, 0.4)' : 'rgba(255, 255, 255, 0.4)',
          labelColor: () => 'rgba(255, 255, 255, 1)',
        }}
        bezier
      />
    </View>
  );
};

export default LineChart;
