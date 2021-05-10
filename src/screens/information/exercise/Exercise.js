import React, { useState } from 'react';
import { View } from 'react-native';
import Text from '../../../component/text/Text';
import { WheelPicker } from 'react-native-wheel-picker-android';
import Icon from '../../../component/Icons/Icon';
import Heading from '../../../component/heading/Heading';
import styles from './Exercise.style';
import ExerciseSVG from '../../../../assets/images/exercise.svg';
import { COLOR } from '../../../global/styles';

const exerciseNumber = Array.from(Array(240), (_, index) =>
  (++index).toString(),
);

const Exercise = props => {
  const [exerciseMinutes, setExerciseMinutes] = useState(59);

  const exerciseHanlder = minutes => {
    if (exerciseMinutes !== minutes) {
      setExerciseMinutes(minutes);
    }
  };

  const prevScreenHanlder = () => {
    props.navigation.pop();
  };

  const nextScreenHanlder = () => {
    // dispatch(
    //   setWeight({
    //     weight: weightNumbers[weightSelected],
    //     weightType: metricNumbers[metricSelected],
    //   }),
    // );
    props.navigation.navigate('Exercise');
  };

  return (
    <View style={styles.container}>
      <Heading>How much do you exercise?</Heading>
      <View style={styles.exerciseWrapper}>
        <View style={styles.icon}>
          <ExerciseSVG
            fill={COLOR.primary}
            width="100%"
            height="100%"
            viewBox="100 50 700 150"
          />
        </View>
        <View style={styles.picker}>
          <View style={styles.pickerItem}>
            <WheelPicker
              selectedItem={exerciseMinutes}
              data={exerciseNumber}
              onItemSelected={exerciseHanlder}
              selectedItemTextColor={COLOR.primary}
              selectedItemTextSize={20}
            />
          </View>
          <View style={styles.pickerItem}>
            <Text style={styles.info}>minutes/day</Text>
          </View>
        </View>
      </View>
      <Icon
        name="chevron-back-outline"
        size={35}
        color={COLOR.background}
        pressHandler={prevScreenHanlder}
        style={styles.prev}
      />
      <Icon
        name="arrow-forward-outline"
        size={35}
        color={COLOR.background}
        pressHandler={nextScreenHanlder}
        style={styles.next}
      />
    </View>
  );
};

export default Exercise;
