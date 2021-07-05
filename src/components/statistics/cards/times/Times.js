import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Card from 'components/statistics/cards/Card';
import { getTableCount } from 'global/database/Database.helper';

const Times = () => {
  const navigation = useNavigation();
  const [times, setTimes] = useState(0);
  const newCompleted = useSelector(state => state.information.completed);
  const [oldCompleted, setOldCompleted] = useState(0);

  const CalculateTimes = useCallback(row => {
    const { count, sum } = row[0];
    setTimes(Math.round(sum / count));
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (oldCompleted !== newCompleted) {
        getTableCount(null, null, [
          'COUNT(times) AS count',
          'SUM(times) AS sum',
        ]).then(rows => {
          CalculateTimes(rows);
          setOldCompleted(newCompleted);
        });
      }
    });
    return unsubscribe;
  }, [navigation, CalculateTimes, oldCompleted, newCompleted]);

  return (
    <Card
      heading={`${times}/day`}
      subText="Times Daily Intake"
      subStyle={{ alignSelf: 'flex-end', marginRight: 30 }}
    />
  );
};

export default Times;
