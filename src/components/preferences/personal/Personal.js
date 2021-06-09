import React, { useState } from 'react';
import { View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import styles from './Personal.style';
import dayjs from 'global/day';
import Pressable from 'components/pressable/Pressable';
import DialogWorker from 'components/dialog/DialogWorker';
import Gender from 'animations/gender/Gender';

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
    setDialog(name);
  };

  const closeDialogHandler = () => {
    setDialog(false);
  };

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.subHeader}>Personal</List.Subheader>
        <List.Item title="Gender" right={() => <Gender />} />
        <Pressable onPress={() => openDialog('weight')}>
          <List.Item
            title="Weight"
            right={() => (
              <Text style={styles.text}>
                {weight} {weightType}
              </Text>
            )}
          />
        </Pressable>
        <Pressable onPress={() => openDialog('sleep')}>
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
        <Pressable onPress={() => openDialog('wake')}>
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
        <Pressable onPress={() => openDialog('exercise')}>
          <List.Item
            title="Exercise"
            right={() => (
              <Text style={styles.text}>{exerciseMinutes} Minutes</Text>
            )}
          />
        </Pressable>
        <Pressable onPress={() => openDialog('metric')}>
          <List.Item
            title="Weight System"
            right={() => (
              <Text style={styles.text}>
                {weightType === 'Kg' ? 'Metric' : 'imperial'}
              </Text>
            )}
          />
        </Pressable>
        <List.Item
          title="Daily Goal"
          right={() => (
            <Text style={styles.text}>
              {dailyGoal} {dailyGoalType}
            </Text>
          )}
        />
      </List.Section>
      {!!dialog && (
        <DialogWorker Name={dialog} closeDialogHandler={closeDialogHandler} />
      )}
    </View>
  );
};

export default Personal;
