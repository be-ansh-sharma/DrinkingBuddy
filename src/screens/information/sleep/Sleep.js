import React, { useState } from 'react';
import { View } from 'react-native';
import SleepSVG from 'assets/images/sleep.svg';
import styles from './Sleep.style';
import Heading from 'components/heading/Heading';
import { COLOR } from 'global/styles';
import Footer from 'components/information/footer/Footer';
import Picker from 'components/picker/Picker';
import { useDispatch, useSelector } from 'react-redux';
import { setSleep } from 'store/actions/person';

const HOURS = Array.from(Array(24), (_, index) =>
  index.toString().padStart(2, '0'),
);
const MINUTES = Array.from(Array(60), (_, index) =>
  index.toString().padStart(2, '0'),
);

const Sleep = props => {
  let storeSleep = useSelector(state => state.person.sleep);
  const [hours, setHours] = useState(storeSleep.hour);
  const [minutes, setMinutes] = useState(storeSleep.minute);
  const dispatch = useDispatch();

  const prevScreenHanlder = () => {
    props.navigation.pop();
  };

  const nextScreenHanlder = () => {
    dispatch(
      setSleep({
        hour: hours,
        minute: minutes,
      }),
    );
    props.navigation.navigate('Wake');
  };

  const minuteHandler = minute => {
    if (minute !== minutes) {
      setMinutes(minute);
    }
  };

  const hourHandler = hour => {
    if (hour !== hours) {
      setHours(hour);
    }
  };

  return (
    <View style={styles.container}>
      <Heading>When do you sleep?</Heading>
      <View style={styles.sleepWrapper}>
        <View style={styles.icon}>
          <SleepSVG
            fill={COLOR.primary}
            width="100%"
            height="100%"
            viewBox="-150 0 900 900"
            preserveAspectRatio="xMinYMin slice"
          />
        </View>
        <View style={styles.picker}>
          <View style={styles.pickerItem}>
            <Picker
              selectedItem={hours}
              data={HOURS}
              isCyclic={true}
              onItemSelected={hourHandler}
              selectedItemTextColor={COLOR.primary}
              selectedItemTextSize={20}
            />
          </View>
          <View style={styles.pickerItem}>
            <Picker
              selectedItem={minutes}
              data={MINUTES}
              isCyclic={true}
              onItemSelected={minuteHandler}
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

export default Sleep;
