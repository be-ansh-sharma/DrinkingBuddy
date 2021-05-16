import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Text from '../../../component/text/Text';
import styles from './Finish.style';
import { storePerson } from '../../../store/actions/person';
import Icon from '../../../component/Icons/Icon';
import { COLOR } from '../../../global/styles';
import IconButton from '../../../component/buttons/iconbutton/IconButton';
import {
  setQuiteTime,
  setNotifications,
  setSetupFinished,
} from '../../../store/actions/information';
import { useCallback } from 'react';

const Finish = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const person = useSelector(state => state.person);
  const dispatch = useDispatch();

  const nextScreenHanlder = useCallback(() => {
    dispatch(setSetupFinished(true));
  }, [dispatch]);

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });

    let dispatchTimer = setTimeout(() => {
      dispatch(
        storePerson(
          person.gender,
          person.weight,
          person.weightType,
          person.exerciseMinutes,
        ),
      );
      (async () => {
        dispatch(
          setQuiteTime({
            0: {
              start: person.sleep,
              end: person.wake,
            },
          }),
        );
        dispatch(setNotifications());
      })();
      setIsLoading(false);
    }, 1400);

    const exitScreenTimer = setTimeout(nextScreenHanlder, 8000);

    return () => {
      clearTimeout(dispatchTimer);
      clearTimeout(exitScreenTimer);
    };
  }, [
    dispatch,
    navigation,
    nextScreenHanlder,
    person.exerciseMinutes,
    person.gender,
    person.sleep,
    person.wake,
    person.weight,
    person.weightType,
  ]);

  if (isLoading && !person.dailyGoal) {
    return (
      <View style={styles.loaderContainer}>
        <Image
          style={styles.loader}
          source={require('../../../../assets/images/loading.gif')}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Icon name="water-outline" size={40} color={COLOR.primary} />
        <Text style={styles.text}>
          Your Daily Target is {person.dailyGoal} {person.dailyGoalType}
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Icon name="alarm-outline" size={40} color={COLOR.primary} />
        <Text style={styles.text}>We will notify you when to drink</Text>
      </View>
      <View style={styles.itemContainer}>
        <Icon name="bar-chart-outline" size={40} color={COLOR.primary} />
        <Text style={styles.text}>
          You can check your history about your daily intake
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Icon name="settings-outline" size={40} color={COLOR.primary} />
        <Text style={styles.text}>You can change your settings anytime.</Text>
      </View>
      <IconButton
        onPress={nextScreenHanlder}
        icon="arrow-forward-circle-outline">
        Let's Start
      </IconButton>
    </View>
  );
};

export default Finish;
