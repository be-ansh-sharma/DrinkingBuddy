import React, { useCallback, useEffect, useState } from 'react';
import Card from 'components/statistics/cards/Card';
import { useSelector } from 'react-redux';
import { getTableData } from 'global/database/Database.helper';
import { changeWaterSystem } from 'global/helpers/helper';
import { useNavigation } from '@react-navigation/native';

const Intake = () => {
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
      setTotalIntake(currentIntake);
    },
    [weightType],
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getTableData(null, null, ['completed', 'weightType']).then(rows => {
        calculateTotalIntake(rows);
      });
    });
    return unsubscribe;
  }, [calculateTotalIntake, navigation]);

  useEffect(() => {
    getTableData(null, null, ['completed', 'weightType']).then(rows => {
      calculateTotalIntake(rows);
    });
  }, [calculateTotalIntake]);

  return (
    <Card
      heading={`${Math.round(totalIntake)} ${dailyGoalType}`}
      subText="Intake so far..."
      subStyle={{ alignSelf: 'flex-end', marginRight: 30 }}
    />
  );
};

export default Intake;
