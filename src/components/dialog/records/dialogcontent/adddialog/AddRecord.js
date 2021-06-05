import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Picker from 'components/picker/Picker';
import dayjs from 'global/day';
import { COLOR } from 'global/styles';
import styles from './AddRecord.style';
import Text from 'components/text/Text';
import { TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';

const HOURS = Array.from(Array(+dayjs().get('hour') + 1), (_, index) =>
  index.toString().padStart(2, '0'),
);
const MINUTES = Array.from(Array(60), (_, index) =>
  index.toString().padStart(2, '0'),
);

const AddRecord = ({ changeHandler, dialogError }) => {
  const [hours, setHours] = useState(+dayjs().get('hour'));
  const [minutes, setMinutes] = useState(+dayjs().get('minutes'));
  const { dailyGoalType, cup } = useSelector(state => state.person);
  const [text, setText] = useState(cup.toString());

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

  const validateText = value => {
    if (!isNaN(+value) && +value < 2000) {
      setText(value);
    }
  };

  useEffect(() => {
    let time = dayjs().hour(hours).minute(minutes);
    changeHandler(time, +text);
  }, [hours, minutes, text]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Time</Text>
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
      <View style={styles.subContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Amount</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            label={dailyGoalType}
            mode="flat"
            keyboardType="decimal-pad"
            style={{ backgroundColor: 'white' }}
            value={text}
            onChangeText={value => validateText(value)}
          />
        </View>
      </View>
      {!!dialogError.length && <Text style={styles.error}>{dialogError}</Text>}
    </View>
  );
};

export default AddRecord;
