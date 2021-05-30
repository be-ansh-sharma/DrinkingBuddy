import React, { useState } from 'react';
import { View } from 'react-native';
import { Dialog, Button, Portal } from 'react-native-paper';
import UpdateCup from './dialogcontent/updatecup/UpdateCup';

const RecordDialog = ({ closeDialogHandler, title, cup, dailyGoalType }) => {
  const [visible] = useState(true);
  const [cupSize, setCupSize] = useState(cup);
  const hideDialog = () => {
    console.log('ddddd');
    closeDialogHandler(cupSize);
  };
  const cupChangeHandler = newCup => {
    setCupSize(newCup);
  };

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            <UpdateCup
              cup={cup}
              dailyGoalType={dailyGoalType}
              cupChangeHandler={cupChangeHandler}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default RecordDialog;
