import React, { useState } from 'react';
import { View } from 'react-native';
import WakeSVG from 'assets/images/wake.svg';
import styles from './Wake.style';
import Heading from 'components/heading/Heading';
import { COLOR } from 'global/styles';
import Picker from 'components/picker/Picker';
import { useDispatch, useSelector } from 'react-redux';
import { setWake } from 'store/actions/person';
import Footer from 'components/information/footer/Footer';

const HOURS = Array.from(Array(24), (_, index) =>
  index.toString().padStart(2, '0'),
);
const MINUTES = Array.from(Array(60), (_, index) =>
  index.toString().padStart(2, '0'),
);

const Wake = props => {
  let storeWake = useSelector(state => state.person.wake);
  const [hours, setHours] = useState(storeWake.hour);
  const [minutes, setMinutes] = useState(storeWake.minute);
  const dispatch = useDispatch();

  const prevScreenHanlder = () => {
    props.navigation.pop();
  };

  const nextScreenHanlder = () => {
    dispatch(
      setWake({
        hour: hours,
        minute: minutes,
      }),
    );
    props.navigation.navigate('Finish');
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
      <Heading>When do you Wake-up?</Heading>
      <View style={styles.wakeWrapper}>
        <View style={styles.icon}>
          <WakeSVG
            fill={COLOR.primary}
            width="100%"
            height="100%"
            viewBox="-100 -100 1000 1200"
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
        nextIcon="save-outline"
        nextIconSize={30}
      />
    </View>
  );
};

export default Wake;
