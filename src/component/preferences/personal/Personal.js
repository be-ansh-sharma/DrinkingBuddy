import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { useSelector } from 'react-redux';
import Text from '../../text/Text';
import styles from './Personal.style';
import dayjs from '../../../global/day';
import Pressable from '../../pressable/Pressable';

const Personal = props => {
  const {
    gender,
    weight,
    weightType,
    exerciseMinutes,
    dailyGoal,
    sleep,
    wake,
    dailyGoalType,
  } = useSelector(state => state.person);
  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.subHeader}>Personal</List.Subheader>
        <Pressable>
          <List.Item
            title="Gender"
            right={() => <Text style={styles.text}>{gender}</Text>}
          />
        </Pressable>
        <Pressable>
          <List.Item
            title="Weight"
            right={() => (
              <Text style={styles.text}>
                {weight} {weightType}
              </Text>
            )}
          />
        </Pressable>
        <Pressable>
          <List.Item
            title="Sleep Time"
            right={() => (
              <Text style={styles.text}>
                {dayjs()
                  .hour(sleep.hour)
                  .minute(sleep.minute)
                  .second(0)
                  .format('hh:mm A')}
              </Text>
            )}
          />
        </Pressable>
        <Pressable>
          <List.Item
            title="Wakeup Time"
            right={() => (
              <Text style={styles.text}>
                {dayjs()
                  .hour(wake.hour)
                  .minute(wake.minute)
                  .second(0)
                  .format('hh:mm A')}
              </Text>
            )}
          />
        </Pressable>
        <Pressable>
          <List.Item
            title="Exercise"
            right={() => (
              <Text style={styles.text}>{exerciseMinutes} Minutes</Text>
            )}
          />
        </Pressable>
        <Pressable>
          <List.Item
            title="Daily Goal"
            right={() => (
              <Text style={styles.text}>
                {dailyGoal} {dailyGoalType}
              </Text>
            )}
          />
        </Pressable>
      </List.Section>
    </View>
  );
};

export default Personal;
