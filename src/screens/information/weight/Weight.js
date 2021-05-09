import React, { useState } from 'react';
import { View } from 'react-native';
import Heading from '../../../component/heading/Heading';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { COLOR } from '../../../global/styles';
import styles from './Weight.style';
import WeightSVG from '../../../../assets/images/weight.svg';

const weightNumbers = Array.from(Array(800), (_, index) =>
  (++index).toString(),
);

const metricNumbers = ['kg', 'lb'];

const Weight = props => {
  const [weightSelected, setWeightSelected] = useState(0);
  const [metricSelected, setMetricSelected] = useState(0);

  const weightHanlder = item => {
    setWeightSelected(item);
  };

  const metricHanlder = item => {
    setMetricSelected(item);
  };

  return (
    <View style={styles.container}>
      <Heading>Select Your Weight</Heading>
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
          <View>
            <WheelPicker
              selectedItem={weightSelected}
              data={weightNumbers}
              onItemSelected={weightHanlder}
              selectedItemTextColor={COLOR.primary}
            />
          </View>
          <View>
            <WheelPicker
              selectedItem={metricSelected}
              data={metricNumbers}
              onItemSelected={metricHanlder}
              selectedItemTextColor={COLOR.primary}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Weight;
