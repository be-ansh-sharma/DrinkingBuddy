import React, { useState } from 'react';
import { View } from 'react-native';
import { List, Text } from 'react-native-paper';
import styles from './General.style';
import DarkMode from 'animations/darkmode/DarkMode';
import DialogWorker from 'components/dialog/DialogWorker';
import Pressable from 'components/pressable/Pressable';
import { NotificationSetting } from 'global/CONSTANTS';
import { useSelector } from 'react-redux';

const General = props => {
  const [dialog, setDialog] = useState(false);
  const notificationChannelID = useSelector(
    state => state.information.notificationChannelID,
  );

  const openDialog = name => {
    setDialog(name);
  };

  const closeDialogHandler = () => {
    setDialog(false);
  };

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.subHeader}>General</List.Subheader>
        <Pressable onPress={() => openDialog('notificationmode')}>
          <List.Item
            title="Reminder Mode"
            right={() => (
              <Text style={styles.text}>
                {NotificationSetting[notificationChannelID]?.label ||
                  'System Default'}
              </Text>
            )}
          />
        </Pressable>
        <List.Item title="Dark Mode" right={() => <DarkMode />} />
      </List.Section>
      {!!dialog && (
        <DialogWorker Name={dialog} closeDialogHandler={closeDialogHandler} />
      )}
    </View>
  );
};

export default General;
