import React, { useState } from 'react';
import { Dialog, Button, Portal } from 'react-native-paper';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Picker from '../../../picker/Picker';
import styles from './Wake.style';
import { COLOR } from '../../../../global/styles';
import { setWake } from '../../../../store/actions/person';
import { setQuiteTime } from '../../../../store/actions/information';
import { removeAllNotification } from '../../../../global/helpers/notification';

const HOURS = Array.from(Array(24), (_, index) =>
  index.toString().padStart(2, '0'),
);
const MINUTES = Array.from(Array(60), (_, index) =>
  index.toString().padStart(2, '0'),
);

const Wake = ({ closeDialogHandler }) => {
  let { sleep, wake } = useSelector(state => state.person);
  const [hours, setHours] = useState(wake.hour);
  const [minutes, setMinutes] = useState(wake.minute);
  const dispatch = useDispatch();

  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    removeAllNotification();
    dispatch(
      setWake({
        hour: hours,
        minute: minutes,
      }),
    );
    dispatch(
      setQuiteTime({
        0: {
          start: sleep,
          end: {
            hour: hours,
            minute: minutes,
          },
        },
      }),
    );
    closeDialogHandler();
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
    <View>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog} dismissable={false}>
          <Dialog.Title style={{ color: COLOR.primary }}>
            Wake Time
          </Dialog.Title>
          <Dialog.Content>
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
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog(false)}>Cancel</Button>
            <Button onPress={hideDialog}>Update</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Wake;
