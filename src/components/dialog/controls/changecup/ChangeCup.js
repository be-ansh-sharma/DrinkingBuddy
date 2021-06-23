import React, { useState } from 'react';
import { View } from 'react-native';
import { Dialog, Button, Portal, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { COLOR } from 'global/styles';
import { useSelector } from 'react-redux';
import { CUPSIZE } from 'global/CONSTANTS';
import Pressable from 'components/pressable/Pressable';
import styles from './ChangeCup.style';
import { changeWaterSystem } from 'global/helpers/helper';
import { setCup } from 'store/actions/person';
import { removeAllNotification } from 'global/helpers/notification';

const ChangeCup = ({ closeDialogHandler }) => {
  const dispatch = useDispatch();
  const { cup, dailyGoalType } = useSelector(state => state.person);
  const [current, setCurrent] = useState(cup);

  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    removeAllNotification();
    dispatch(setCup(current));
    closeDialogHandler();
  };

  const changeModeHandler = mode => {
    if (mode !== current) {
      setCurrent(mode);
    }
  };

  const fetchCurrentCup = value => {
    if (dailyGoalType !== 'ml') {
      return changeWaterSystem(value, 'oz');
    }
    return value;
  };

  return (
    <View>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog} dismissable={false}>
          <Dialog.Title style={{ color: COLOR.primary }}>
            Selected: {Math.round(cup)} {dailyGoalType}
          </Dialog.Title>
          <Dialog.Content>
            <View style={styles.container}>
              {Object.keys(CUPSIZE).map(_key => {
                let currentCup = CUPSIZE[_key];
                let currentCupValue = fetchCurrentCup(currentCup.value);
                return (
                  <Pressable
                    android_ripple={{}}
                    key={_key}
                    onPress={() => changeModeHandler(currentCupValue)}
                    style={
                      currentCupValue === current
                        ? [styles.items, styles.itemSelected]
                        : styles.items
                    }>
                    <Text>
                      {Math.round(currentCupValue)} {dailyGoalType}
                    </Text>
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

export default ChangeCup;
