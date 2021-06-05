import React, { useState } from 'react';
import { View } from 'react-native';
import { Dialog, Button, Portal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Picker from 'components/picker/Picker';
import { COLOR } from 'global/styles';
import Text from 'components/text/Text';
import styles from './Weight.style';
import { updatePerson } from 'store/actions/person';
import { removeAllNotification } from 'global/helpers/notification';

const weightNumbers = Array.from(Array(881), (_, index) =>
  (++index).toString().padStart(2, '0'),
);

const Weight = ({ closeDialogHandler }) => {
  let { weight, weightType } = useSelector(state => state.person);
  const [weightSelected, setWeightSelected] = useState(--weight);
  const dispatch = useDispatch();

  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    removeAllNotification();
    dispatch(updatePerson('weight', +weightNumbers[weightSelected]));
    closeDialogHandler();
  };

  const weightHanlder = item => {
    setWeightSelected(item);
  };

  return (
    <View>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog} dismissable={false}>
          <Dialog.Title style={{ color: COLOR.primary }}>Weight</Dialog.Title>
          <Dialog.Content>
            <View style={styles.container}>
              <View>
                <Picker
                  selectedItem={weightSelected}
                  data={weightNumbers}
                  onItemSelected={weightHanlder}
                  selectedItemTextColor={COLOR.primary}
                  selectedItemTextSize={20}
                />
              </View>
              <View style={styles.text}>
                <Text style={{ color: COLOR.primary }}>{weightType}</Text>
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

export default Weight;
