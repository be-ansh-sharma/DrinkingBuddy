import React, { useState } from 'react';
import { Dialog, Button, Portal, Text } from 'react-native-paper';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Picker from 'components/picker/Picker';
import styles from './Exercise.Style';
import { COLOR } from 'global/styles';
import { removeAllNotification } from 'global/helpers/notification';
import { updatePerson } from 'store/actions/person';

const exerciseNumber = Array.from(Array(240), (_, index) =>
  (++index).toString().padStart(2, '0'),
);

const Exercise = ({ closeDialogHandler }) => {
  let storeExercise = useSelector(state => state.person.exerciseMinutes);
  const [exerciseMinutes, setExerciseMinutes] = useState(--storeExercise);
  const dispatch = useDispatch();

  const exerciseHandler = minutes => {
    if (exerciseMinutes !== minutes) {
      setExerciseMinutes(minutes);
    }
  };

  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    removeAllNotification();
    dispatch(updatePerson('exercise', +exerciseNumber[exerciseMinutes]));
    closeDialogHandler();
  };

  return (
    <View>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog} dismissable={false}>
          <Dialog.Title style={{ color: COLOR.primary }}>Exercise</Dialog.Title>
          <Dialog.Content>
            <View style={styles.picker}>
              <View>
                <Picker
                  selectedItem={exerciseMinutes}
                  data={exerciseNumber}
                  onItemSelected={exerciseHandler}
                  selectedItemTextColor={COLOR.primary}
                  selectedItemTextSize={20}
                  isCyclic={true}
                />
              </View>
              <View style={styles.pickerItem}>
                <Text style={{ color: COLOR.primary }}>minutes/day</Text>
              </View>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button color={COLOR.danger} onPress={() => hideDialog(false)}>
              Cancel
            </Button>
            <Button onPress={hideDialog}>Update</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Exercise;