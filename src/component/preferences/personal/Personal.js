import React, { useState } from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { useSelector } from 'react-redux';
import Text from '../../text/Text';
import styles from './Personal.style';
import dayjs from '../../../global/day';
import Pressable from '../../pressable/Pressable';
import DialogWorker from '../../dialog/personal/DialogWorker';
import Gender from '../../../animations/gender/Gender';

const Personal = props => {
  const {
    weight,
    weightType,
    exerciseMinutes,
    dailyGoal,
    sleep,
    wake,
    dailyGoalType,
  } = useSelector(state => state.person);
  const [dialog, setDialog] = useState(false);

  const openDialog = name => {
    //setDialog(name);
  };

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.subHeader}>Personal</List.Subheader>
        <List.Item title="Gender" right={() => <Gender />} />
        <Pressable onPress={openDialog('Weight')}>
          <List.Item
            title="Weight"
            right={() => (
              <Text style={styles.text}>
                {weight} {weightType}
              </Text>
            )}
          />
        </Pressable>
        <Pressable onPress={openDialog('Sleep')}>
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
        <Pressable onPress={openDialog('Wake')}>
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
        <Pressable onPress={openDialog('Exercise')}>
          <List.Item
            title="Exercise"
            right={() => (
              <Text style={styles.text}>{exerciseMinutes} Minutes</Text>
            )}
          />
        </Pressable>
        <Pressable onPress={openDialog('Goal')}>
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
      {!!dialog && <DialogWorker name={dialog} />}
    </View>
  );
};

export default Personal;
