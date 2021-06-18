import React, { useState } from 'react';
import { View } from 'react-native';
import { Dialog, Button, Portal, Text, List } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { COLOR } from 'global/styles';
import { NotificationSetting } from 'global/CONSTANTS';
import { removeAllNotification } from 'global/helpers/notification';
import { useSelector } from 'react-redux';
import { setChannelID } from 'store/actions/information';
import Pressable from 'components/pressable/Pressable';

const NotificationMode = ({ closeDialogHandler }) => {
  const dispatch = useDispatch();
  const { notificationChannelID, darkMode } = useSelector(
    state => state.information,
  );
  const [current, setCurrent] = useState(notificationChannelID);

  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    removeAllNotification();
    dispatch(setChannelID(current));
    closeDialogHandler();
  };

  const changeModeHandler = mode => {
    if (mode !== current) {
      setCurrent(mode);
    }
  };

  return (
    <View>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog} dismissable={false}>
          <Dialog.Title style={{ color: COLOR.primary }}>
            Reminder Mode!
          </Dialog.Title>
          <Dialog.Content>
            <View>
              {Object.keys(NotificationSetting).map(index => {
                let setting = NotificationSetting[index];
                return (
                  <Pressable
                    key={index}
                    onPress={() => changeModeHandler(index)}
                    android_ripple={null}>
                    <List.Item
                      title={setting.label}
                      left={props => (
                        <List.Icon
                          {...props}
                          icon={setting.icon}
                          color={
                            index === current
                              ? COLOR.primary
                              : darkMode
                              ? COLOR.background
                              : COLOR.dark
                          }
                        />
                      )}
                    />
                  </Pressable>
                );
              })}
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button color={COLOR.faded} onPress={() => hideDialog(false)}>
              Cancel
            </Button>
            <Button onPress={hideDialog}>Update</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default NotificationMode;
