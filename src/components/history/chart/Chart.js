import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import ChartControl from 'components/history/chartcontrol/ChartControl';
import { getTableData } from 'global/database/Database.helper';
import { useSelector } from 'react-redux';
import LineChart from './linechart/LineChart';
import dayjs from 'global/day';
import { useNavigation } from '@react-navigation/native';

const Chart = () => {
  const newCompleted = useSelector(state => state.information.completed);
  const storedWeightType = useSelector(state => state.person.weightType);
  const [oldCompleted, setOldCompleted] = useState(newCompleted);
  const [startDate, setStartDate] = useState(
    dayjs().date(1).format('YYYY-MM-DD'),
  );
  const [endDate, setEndDate] = useState(
    dayjs().date(dayjs().daysInMonth()).format('YYYY-MM-DD'),
  );
  const [rows, setRows] = useState([]);
  const navigation = useNavigation();

  const nextControlHandler = () => {
    let end = dayjs(startDate).subtract(1, 'day');
    setEndDate(end.format('YYYY-MM-DD'));
    setStartDate(end.date(1).format('YYYY-MM-DD'));
  };

  const previousControlHandler = () => {
    let end;
    end = dayjs(endDate).add(1, 'day');
    setEndDate(end.date(dayjs(end.daysInMonth())).format('YYYY-MM-DD'));
    setStartDate(end.format('YYYY-MM-DD'));
  };

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
    const unsubscribe = navigation.addListener('focus', () => {
      if (oldCompleted !== newCompleted) {
        captureData(storedWeightType);
        setOldCompleted(newCompleted);
      }
    });

    return unsubscribe;
  }, [captureData, newCompleted, navigation, oldCompleted, storedWeightType]);

  useEffect(() => {
    captureData(storedWeightType);
  }, [captureData, storedWeightType]);

  return (
    <View>
      <ChartControl
        display={dayjs(startDate)}
        nextControlHandler={nextControlHandler}
        previousControlHandler={previousControlHandler}
      />
      <LineChart rows={rows} storedWeightType={storedWeightType} />
    </View>
  );
};

export default Chart;
