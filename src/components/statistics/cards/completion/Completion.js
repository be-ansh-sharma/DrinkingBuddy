import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import Card from 'components/statistics/cards/Card';
import styles from './Completion.style';
import { useSelector } from 'react-redux';
import { getTableData } from 'global/database/Database.helper';
import dayjs from 'global/day';
import { useNavigation } from '@react-navigation/core';
import { changeWaterSystem } from 'global/helpers/helper';

const Completion = () => {
  const newCompleted = useSelector(state => state.information.completed);
  const [oldCompleted, setOldCompleted] = useState(0);
  const { weightType, dailyGoalType } = useSelector(state => state.person);
  const [percentage, setPercentage] = useState(0);
  const [average, setAverage] = useState(0);
  const navigation = useNavigation();

  const calculateCompletion = useCallback(
    rows => {
      let currentPercentage = rows.reduce((acc, curr) => {
        let currentWeightType = curr.weightType;
        let currentCompleted = curr.completed;
        let dailyGoal = curr.dailyGoal;
        if (weightType === 'Kg') {
          if (currentWeightType !== 'Kg') {
            currentCompleted = changeWaterSystem(currentCompleted, weightType);
            dailyGoal = changeWaterSystem(dailyGoal, weightType);
          }
        } else {
          if (currentWeightType !== 'lbs') {
            currentCompleted = changeWaterSystem(currentCompleted, weightType);
            dailyGoal = changeWaterSystem(dailyGoal, weightType);
          }
        }
        return acc + (currentCompleted / dailyGoal) * 100;
      }, 0);

      let currentAverage = rows.reduce((acc, curr) => {
        let currentWeightType = curr.weightType;
        let currentCompleted = curr.completed;
        if (weightType === 'Kg') {
          if (currentWeightType !== 'Kg') {
            currentCompleted = changeWaterSystem(currentCompleted, weightType);
          }
        } else {
          if (currentWeightType !== 'lbs') {
            currentCompleted = changeWaterSystem(currentCompleted, weightType);
          }
        }
        return acc + currentCompleted;
      }, 0);

      setPercentage(Math.round(currentPercentage / 7));
      setAverage(Math.round(currentAverage / 7));
    },
    [weightType],
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (oldCompleted !== newCompleted) {
        getTableData(
          dayjs().day(0).format('YYYY-MM-DD'),
          dayjs().day(6).format('YYYY-MM-DD'),
          ['completed', 'weightType', 'dailyGoal'],
        ).then(rows => {
          calculateCompletion(rows);
          setOldCompleted(newCompleted);
        });
      }
    });
    return unsubscribe;
  }, [calculateCompletion, navigation, newCompleted, oldCompleted]);

  return (
    <View style={styles.container}>
      <Card
        containerStyle={styles.row}
        heading={`${percentage}%`}
        subText="Weekly Completion"
      />
      <Card
        containerStyle={styles.row}
        heading={`${average}`}
        subText={`${dailyGoalType} Weekly Average`}
        headingStyle={styles.rightHeading}
      />
    </View>
  );
};

export default Completion;
