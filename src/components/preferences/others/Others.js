import React, { useState } from 'react';
import { Linking, View } from 'react-native';
import { List } from 'react-native-paper';
import styles from './Others.style';
import Pressable from 'components/pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
import DialogWorker from 'components/dialog/DialogWorker';
import Icon from 'components/Icons/Icon';
import { COLOR } from 'global/styles';

const Others = props => {
  const navigation = useNavigation();
  const [dialog, setDialog] = useState(false);
  const aboutHandler = () => {
    navigation.navigate('Modal', {
      type: 'about',
      title: 'About',
    });
  };

  const openDialog = name => {
    setDialog(name);
  };

  const closeDialogHandler = () => {
    setDialog(false);
  };

  const donationHandler = () => {
    Linking.openURL('https://www.buymeacoffee.com/be.ansh').catch(err =>
      console.error('An error occurred', err),
    );
  };

  const feedbackHandler = () => {
    Linking.openURL(
      'mailto:epoch.feedback@gmail.com?subject=Drinking Buddy App Feedback',
    ).catch(err => console.error('An error occurred', err));
  };

  return (
    <View>
      <List.Section>
        <List.Subheader style={styles.subHeader}>Others</List.Subheader>
        <Pressable onPress={() => openDialog('setting')}>
          <List.Item title="Why don't I get the notification?" />
        </Pressable>
        <Pressable onPress={() => openDialog('reset')}>
          <List.Item title="Wipe Data" />
        </Pressable>
        <Pressable onPress={feedbackHandler}>
          <List.Item
            title="Feedback"
            right={() => (
              <Icon
                name="mail-outline"
                size={20}
                style={styles.icon}
                color={COLOR.primary}
              />
            )}
          />
        </Pressable>
        <Pressable onPress={donationHandler}>
          <List.Item
            title="Help me with a Pizza"
            right={() => (
              <Icon
                name="pizza-outline"
                size={20}
                style={styles.icon}
                color={COLOR.primary}
              />
            )}
          />
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
