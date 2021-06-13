import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import ChartControl from 'components/history/chartcontrol/ChartControl';
import { getTableData, dropTable } from 'global/database/Database.helper';
import { useSelector } from 'react-redux';
import LineChart from './barchart/LineChart';
import dayjs from 'global/day';
import { useNavigation } from '@react-navigation/native';
import styles from './Chart.style';

const Chart = () => {
  const storedCompleted = useSelector(state => state.information.completed);
  const storedWeightType = useSelector(state => state.person.weightType);
  const [startDate, setStartDate] = useState(
    dayjs().date(1).format('YYYY-MM-DD'),
  );
  const [endDate, setEndDate] = useState(
    dayjs(dayjs().daysInMonth()).format('YYYY-MM-DD'),
  );
  const [display, setDisplay] = useState(dayjs().format('MMMM'));
  const [rows, setRows] = useState([]);
  const navigation = useNavigation();

  const captureData = useCallback(async () => {
    let resultRows = await getTableData(startDate, endDate, [
      'completed',
      'dailyGoal',
      'date',
      'weightType',
    ]);
    if (resultRows.length) {
      setRows(resultRows);
    } else {
      setRows([]);
    }
  }, [endDate, startDate]);

  useEffect(() => {
    captureData(storedWeightType);
    const unsubscribe = navigation.addListener('focus', () => {
      captureData(storedWeightType);
    });

    return unsubscribe;
  }, [captureData, storedCompleted, navigation, storedWeightType]);

  return (
    <View>
      <ChartControl display={display} />
      <LineChart rows={rows} storedWeightType={storedWeightType} />
    </View>
  );
};

export default Chart;
