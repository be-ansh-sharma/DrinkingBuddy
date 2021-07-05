import React, { useCallback, useEffect, useState } from 'react';
import Card from 'components/statistics/cards/Card';
import { useSelector } from 'react-redux';
import { getTableData } from 'global/database/Database.helper';
import { changeWaterSystem } from 'global/helpers/helper';
import { useNavigation } from '@react-navigation/native';

const Intake = () => {
  const newCompleted = useSelector(state => state.information.completed);
  const [oldCompleted, setOldCompleted] = useState(0);
  const [totalIntake, setTotalIntake] = useState(0);
  const { dailyGoalType, weightType } = useSelector(state => state.person);
  const navigation = useNavigation();

  const calculateTotalIntake = useCallback(
    rows => {
      let currentIntake = rows.reduce((acc, curr) => {
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

      if (dailyGoalType === 'ml') {
        currentIntake = currentIntake / 1000;
      } else {
        currentIntake = currentIntake / 128;
      }
      setTotalIntake(currentIntake.toFixed(1));
    },
    [weightType],
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (oldCompleted !== newCompleted) {
        getTableData(null, null, ['completed', 'weightType']).then(rows => {
          calculateTotalIntake(rows);
          setOldCompleted(newCompleted);
        });
      }
    });
    return unsubscribe;
  }, [calculateTotalIntake, navigation, newCompleted, oldCompleted]);

  return (
    <Card
      heading={`${totalIntake} ${dailyGoalType === 'ml' ? 'L' : 'Gal'}`}
      subText="Intake so far..."
      subStyle={{ alignSelf: 'flex-end', marginRight: 30 }}
    />
  );
};

export default Intake;
