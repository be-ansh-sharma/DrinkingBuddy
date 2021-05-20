import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Text from '../text/Text';
import styles from './Records.style';
import Icon from '../Icons/Icon';
import Record from './record/Record';
import { COLOR } from '../../global/styles';
import dayjs from '../../global/day';

const Records = props => {
  let records = useSelector(state => state.slug.records);
  //console.log(records);
  let nextNotification = useSelector(
    state => state.information.nextNotification,
  );
  let { cup, dailyGoalType } = useSelector(state => state.person);

  console.log(!!records.length);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Today's Records</Text>
        <Icon
          name="add-outline"
          size={20}
          color={COLOR.primary}
          android_disableSound={true}
        />
      </View>
      <View style={styles.recordBox}>
        <Record
          next={true}
          time={dayjs(nextNotification).format('hh:mm A')}
          cup={cup}
          dailyGoalType={dailyGoalType}
        />
        {!!records.length &&
          records.map((record, index) => {
            return (
              <Record
                key={index}
                time={record.time}
                cup={record.cup}
                dailyGoalType={record.dailyGoalType}
              />
            );
          })}
      </View>
    </View>
  );
};

export default Records;
