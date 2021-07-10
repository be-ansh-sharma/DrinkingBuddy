import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Picker from 'components/picker/Picker';
import Heading from 'components/heading/Heading';
import styles from './Exercise.style';
import ExerciseSVG from 'assets/images/exercise.svg';
import { COLOR } from 'global/styles';
import { setExercise } from 'store/actions/person';
import { useDispatch, useSelector } from 'react-redux';
import Footer from 'components/information/footer/Footer';

const exerciseNumber = Array.from(Array(240), (_, index) =>
  index === 0 ? '0' : index.toString().padStart(2, '0'),
);

const Exercise = props => {
  let storeExercise = useSelector(state => state.person.exerciseMinutes);
  const [exerciseMinutes, setExerciseMinutes] = useState(+storeExercise);
  const dispatch = useDispatch();

  const exerciseHandler = minutes => {
    if (exerciseMinutes !== minutes) {
      setExerciseMinutes(minutes);
    }
  };

  const prevScreenHanlder = () => {
    props.navigation.pop();
  };

  const nextScreenHandler = () => {
    dispatch(setExercise(exerciseNumber[exerciseMinutes]));
    props.navigation.navigate('Sleep');
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
            <Picker
              selectedItem={exerciseMinutes}
              data={exerciseNumber}
              onItemSelected={exerciseHandler}
              selectedItemTextColor={COLOR.primary}
              selectedItemTextSize={20}
              isCyclic={true}
            />
          </View>
          <View style={styles.pickerItem}>
            <Text style={styles.info}>minutes/day</Text>
          </View>
        </View>
      </View>
      <Footer
        prevScreenHanlder={prevScreenHanlder}
        nextScreenHanlder={nextScreenHandler}
      />
    </View>
  );
};

export default Exercise;
