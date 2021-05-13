import React, { useState } from 'react';
import { View } from 'react-native';
import Heading from '../../../component/heading/Heading';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { COLOR } from '../../../global/styles';
import styles from './Weight.style';
import WeightSVG from '../../../../assets/images/weight.svg';
import { changeMetric } from '../../../global/helper';
import { useDispatch, useSelector } from 'react-redux';
import { setWeight } from '../../../store/actions/person';
import Footer from '../../../component/information/footer/Footer';

const weightNumbers = Array.from(Array(881), (_, index) =>
  (++index).toString().padStart(2, '0'),
);

const metricNumbers = ['Kg', 'lbs'];

const Weight = props => {
  let storeWeight = useSelector(state => state.person.weight);
  const [weightSelected, setWeightSelected] = useState(--storeWeight);
  const [metricSelected, setMetricSelected] = useState(0);
  const dispatch = useDispatch();

  const weightHanlder = item => {
    setWeightSelected(item);
  };

  const metricHanlder = item => {
    if (metricSelected !== item) {
      let newWeight = changeMetric(
        weightNumbers[weightSelected],
        metricNumbers[item],
      );
      setWeightSelected(--newWeight);
      setMetricSelected(item);
    }
  };

  const prevScreenHanlder = () => {
    props.navigation.pop();
  };

  const nextScreenHanlder = () => {
    dispatch(
      setWeight({
        weight: weightNumbers[weightSelected],
        weightType: metricNumbers[metricSelected],
      }),
    );
    props.navigation.navigate('Exercise');
  };

  return (
    <View style={styles.container}>
      <Heading>Your Weight</Heading>
      <View style={styles.weightWrapper}>
        <View style={styles.icon}>
          <WeightSVG
            fill={COLOR.primary}
            width="100%"
            height="100%"
            viewBox="280 100 300 300"
            preserveAspectRatio="xMinYMin slice"
          />
        </View>
        <View style={styles.picker}>
          <View style={styles.pickerItem}>
            <WheelPicker
              selectedItem={weightSelected}
              data={weightNumbers}
              onItemSelected={weightHanlder}
              selectedItemTextColor={COLOR.primary}
              selectedItemTextSize={20}
            />
          </View>
          <View style={styles.pickerItem}>
            <WheelPicker
              selectedItem={metricSelected}
              data={metricNumbers}
              onItemSelected={metricHanlder}
              selectedItemTextColor={COLOR.primary}
              selectedItemTextSize={20}
            />
          </View>
        </View>
      </View>
      <Footer
        prevScreenHanlder={prevScreenHanlder}
        nextScreenHanlder={nextScreenHanlder}
      />
    </View>
  );
};

export default Weight;
