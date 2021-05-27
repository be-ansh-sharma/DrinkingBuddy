import React from 'react';
import { Text, View } from 'react-native';
import { Dialog, Button, Portal } from 'react-native-paper';

const RecordDialog = ({ closeDialogHandler, title }) => {
  const [visible, setVisible] = React.useState(true);
  const hideDialog = () => {
    setVisible(false);
    closeDialogHandler();
  };
  console.log('sssss');
  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            <Text>Test</Text>
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
