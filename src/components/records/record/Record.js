import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './Record.style';
import Icon from 'components/Icons/Icon';
import { Menu, Text } from 'react-native-paper';
import { deleteRecord, editRecord } from 'store/actions/slug';
import { useDispatch } from 'react-redux';
import EditRecordDialog from 'components/dialog/records/EditRecordDialog';

const Record = ({ index, next, time, cup, dailyGoalType }) => {
  const [visible, setVisible] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const openDialogHandler = () => {
    setOpenDialog(true);
  };

  const closeDialogHandler = newCup => {
    dispatch(editRecord(index, cup, newCup));
    setOpenDialog(false);
  };

  const removeRecordHandler = () => {
    dispatch(deleteRecord(index, cup));
    setVisible(false);
  };

  const editHandler = () => {
    setVisible(false);
    openDialogHandler();
  };

  if (next) {
    return (
      <View style={styles.container}>
        <Icon name="timer-outline" size={20} color="white" />
        <View>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.subText}>Upcoming</Text>
        </View>
        <Text style={styles.amount}>
          {Math.ceil(cup)} {dailyGoalType}
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
    <>
      <View style={styles.container}>
        <Icon name="water-outline" size={20} color="white" />
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.amount}>
          {Math.ceil(cup)} {dailyGoalType}
        </Text>
        <View>
          <View>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Icon
                  name="ellipsis-vertical-outline"
                  size={20}
                  color="white"
                  pressHandler={openMenu}
                />
              }>
              <Menu.Item onPress={editHandler} title="Edit" />
              <Menu.Item onPress={removeRecordHandler} title="Delete" />
            </Menu>
          </View>
        </View>
      </View>
      {!!openDialog && (
        <EditRecordDialog
          closeDialogHandler={closeDialogHandler}
          title={
            <Text>
              Consumption at <Text style={styles.dialogText}>{time}</Text>
            </Text>
          }
          cup={cup}
          dailyGoalType={dailyGoalType}
        />
      )}
    </>
  );
};

export default Record;
