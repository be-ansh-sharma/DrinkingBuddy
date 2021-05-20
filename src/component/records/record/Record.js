import React from 'react';
import { View } from 'react-native';
import Text from '../../text/Text';
import styles from './Record.style';
import Icon from '../../Icons/Icon';

const Record = ({ next, time, cup, dailyGoalType }) => {
  if (next) {
    return (
      <View style={styles.container}>
        <Icon name="timer-outline" size={20} color="white" />
        <View>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.subText}>Upcoming</Text>
        </View>
        <Text style={styles.amount}>
          {cup} {dailyGoalType}
        </Text>
        <View>
          <Icon
            name="ellipsis-vertical-outline"
            size={20}
            color="transparent"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Icon name="water-outline" size={20} color="white" />
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.amount}>
        {cup} {dailyGoalType}
      </Text>
      <View>
        <Icon name="ellipsis-vertical-outline" size={20} color="white" />
      </View>
    </View>
  );
};

export default Record;
