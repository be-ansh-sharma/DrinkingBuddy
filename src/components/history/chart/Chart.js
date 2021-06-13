import React, { useCallback, useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { getTableData, dropTable } from 'global/database/Database.helper';
import { useSelector } from 'react-redux';
import BarChart from './barchart/BarChart';
import dayjs from 'global/day';
import { useNavigation } from '@react-navigation/native';
import { changeWaterSystem } from 'global/helpers/helper';
import styles from './Chart.style';

const width = Dimensions.get('window').width;

const Chart = () => {
  const storedCompleted = useSelector(state => state.information.completed);
  const storedWeightType = useSelector(state => state.person.weightType);
  const [startDate, setStartDate] = useState(
    dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
  );
  const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [labels, setLabels] = useState([]);
  const [dataSets, setDataSets] = useState([]);
  const setReady = useState(false)[1];
  const navigation = useNavigation();

  const captureData = useCallback(
    async params => {
      let rows = await getTableData(startDate, endDate, [
        'completed',
        'dailyGoal',
        'date',
        'weightType',
      ]);
      if (rows.length) {
        console.log(rows);
        generateXAxis(rows);
        generateYAxis(rows, params);
      }
      setReady(true);
    },
    [endDate, generateYAxis, generateXAxis, setReady, startDate],
  );

  const generateXAxis = useCallback(data => {
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
        let { completed, weightType, date } = data[i];
        if (dayjs(date).date() === day) {
          if (currentWeightType === 'Kg') {
            set =
              weightType === 'Kg'
                ? completed
                : changeWaterSystem(completed, currentWeightType);
          } else {
            set =
              weightType === 'lbs'
                ? completed
                : changeWaterSystem(completed, currentWeightType);
          }
        }
      }
      return set || 0;
    });
    setDataSets(currentDataSets);
  }, []);

  useEffect(() => {
    console.log('set is ' + storedWeightType);
    captureData(storedWeightType);
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('set is ' + storedWeightType);
      captureData(storedWeightType);
    });

    return unsubscribe;
  }, [captureData, storedCompleted, navigation, storedWeightType]);

  if (!labels.length || !dataSets.length) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View>
      <BarChart labels={labels} datasets={dataSets} />
    </View>
  );
};

export default Chart;
