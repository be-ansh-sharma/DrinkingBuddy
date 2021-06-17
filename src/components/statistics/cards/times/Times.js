import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Card from 'components/statistics/cards/Card';
import { getTableCount } from 'global/database/Database.helper';

const Times = () => {
  const { completed } = useSelector(state => state.information);
  const navigation = useNavigation();
  const [times, setTimes] = useState(0);

  const CalculateTimes = useCallback(row => {
    const { count, sum } = row[0];
    setTimes(Math.round(sum / count));
  }, []);

  useEffect(() => {
    getTableCount(null, null, [
      'COUNT(times) AS count',
      'SUM(times) AS sum',
    ]).then(rows => {
      CalculateTimes(rows);
    });

    const unsubscribe = navigation.addListener('focus', () => {
      getTableCount(null, null, [
        'COUNT(times) AS count',
        'SUM(times) AS sum',
      ]).then(rows => {
        CalculateTimes(rows);
      });
    });
    return unsubscribe;
  }, [completed, navigation, CalculateTimes]);

  return (
    <Card
      heading={`${times}/day`}
      subText="Daily Intake Frequency"
      subStyle={{ alignSelf: 'flex-end', marginRight: 30 }}
    />
  );
};

export default Times;