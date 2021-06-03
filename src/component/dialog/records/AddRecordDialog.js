import React, { useState } from 'react';
import { View } from 'react-native';
import { Dialog, Button, Portal } from 'react-native-paper';
import AddRecord from './dialogcontent/adddialog/AddRecord';
import dayjs from '../../../global/day';

const AddRecordDialog = ({ closeDialogHandler }) => {
  const [visible] = useState(true);
  const [time, setTime] = useState();
  const [quantity, setQuantity] = useState();
  const [error, setError] = useState('');

  const hideDialog = () => {
    if (dayjs(time).isBefore(dayjs()) && quantity !== 0) {
      closeDialogHandler(time, quantity);
    } else {
      console.log('ttt');
      quantity === 0
        ? setError("Oh No! Quantity can't be zero")
        : setError('Oh No! The time is in future!');
    }
  };

  const closeDialog = () => {
    closeDialogHandler();
  };

  const changeHandler = (newTime, newQuantity) => {
    if (newTime.toDate() !== time || newQuantity !== quantity) {
      setTime(newTime.toDate());
      setQuantity(newQuantity);
    }
  };

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} dismissable={false}>
          <Dialog.Title>Add a New Record</Dialog.Title>
          <Dialog.Content>
            <AddRecord changeHandler={changeHandler} dialogError={error} />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={closeDialog}>Cancel</Button>
            <Button onPress={hideDialog}>Add</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default AddRecordDialog;
