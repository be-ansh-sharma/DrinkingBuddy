import React from 'react';
import { Dialog, Button, Portal } from 'react-native-paper';
import { View } from 'react-native';
import Text from 'components/text/Text';
import { removeAllNotification } from 'global/helpers/notification';
import { COLOR } from 'global/styles';
import { removeInformation } from 'store/actions/information';
import { removePerson } from 'store/actions/person';
import { removeSlug } from 'store/actions/slug';
import { clearStorage } from 'global/helpers/helper';
import { useDispatch } from 'react-redux';

const Reset = ({ closeDialogHandler }) => {
  const dispatch = useDispatch();
  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    removeAllNotification();
    dispatch(removeInformation());
    dispatch(removePerson());
    dispatch(removeSlug());
    clearStorage();
    closeDialogHandler();
  };

  return (
    <View>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog} dismissable={false}>
          <Dialog.Title style={{ color: COLOR.primary }}>CAUTION!</Dialog.Title>
          <Dialog.Content>
            <View>
              <Text>
                Wiping your data will delete all your progres and history.
              </Text>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog(false)}>Cancel</Button>
            <Button color={COLOR.danger} onPress={hideDialog}>
              Wipe!
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Reset;