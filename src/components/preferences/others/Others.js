import React, { useState } from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import styles from './Others.style';
import Pressable from 'components/pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
import DialogWorker from 'components/dialog/DialogWorker';

const Others = props => {
  const navigation = useNavigation();
  const [dialog, setDialog] = useState(false);
  const aboutHandler = () => {
    navigation.navigate('About');
  };

  const openDialog = name => {
    setDialog(name);
  };

  const closeDialogHandler = () => {
    setDialog(false);
  };

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.subHeader}>Others</List.Subheader>
        <List.Item title="Why don't I get the notification?" />
        <Pressable onPress={() => openDialog('reset')}>
          <List.Item title="Wipe Data" />
        </Pressable>
        <Pressable onPress={aboutHandler}>
          <List.Item title="About" />
        </Pressable>
      </List.Section>
      {!!dialog && (
        <DialogWorker Name={dialog} closeDialogHandler={closeDialogHandler} />
      )}
    </View>
  );
};

export default Others;
