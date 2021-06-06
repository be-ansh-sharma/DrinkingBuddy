import React from 'react';
import { Dialog, Button, Portal } from 'react-native-paper';
import { View, Linking } from 'react-native';
import Text from 'components/text/Text';
import { COLOR } from 'global/styles';

const Setting = ({ closeDialogHandler }) => {
  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    Linking.openSettings();
    closeDialogHandler();
  };

  return (
    <View>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog} dismissable={false}>
          <Dialog.Title style={{ color: COLOR.primary }}>FAQ</Dialog.Title>
          <Dialog.Content>
            <View>
              <Text style={{ marginTop: 12, fontSize: 14 }}>
                There might be instances where the Drinking Buddy does not
                notify you at the scheduled time. This might be because of the
                or phone system closing the Drinking Buddy App.
              </Text>
              <Text style={{ marginTop: 12, fontSize: 14 }}>
                If you have cleaner app like CCleaner or greenify. We suggest
                you to add Drinking Buddy App to the exception list to make it
                work properly.
              </Text>
              <Text style={{ marginTop: 12, fontSize: 14 }}>
                Some devices like SamSung or OnePlus actively kills app because
                of the strict power plan. We suggest you to add the Drinking
                Buddy App to the Unmonitored Apps list to avoid missing
                reminders.
              </Text>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button color={COLOR.faded} onPress={() => hideDialog(false)}>
              Cancel
            </Button>
            <Button onPress={hideDialog}>Open Settings</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Setting;