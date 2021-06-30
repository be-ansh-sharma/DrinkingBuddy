import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './Home.style';
import Progress from 'components/progress/Progress';
import Control from 'components/control/Control';
import Records from 'components/records/Records';
import * as Notifications from 'expo-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { addRecord } from 'store/actions/slug';
import {
  setCompleted,
  setNotice,
  setNotifications,
  setNotificationToken,
} from 'store/actions/information';
import SmartBanner from 'components/banners/SmartBanner';
import DialogWorker from 'components/dialog/DialogWorker';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { weight, weightType, exerciseMinutes, sleep, wake, cup } = useSelector(
    state => state.person,
  );
  const {
    goalCompleted,
    notificationChannelID,
    noticeShown,
    notificationToken,
  } = useSelector(state => state.information);
  const [dialog, setDialog] = useState(false);
  const lastNotificationResponse = Notifications.useLastNotificationResponse();

  const closeDialogHandler = () => {
    dispatch(setNotice());
    setDialog(false);
  };

  useEffect(() => {
    if (
      lastNotificationResponse &&
      lastNotificationResponse?.notification?.request?.identifier !==
        notificationToken
    ) {
      dispatch(addRecord());
      dispatch(setCompleted());
      dispatch(setNotifications());
      dispatch(
        setNotificationToken(
          lastNotificationResponse?.notification?.request?.identifier,
        ),
      );
    }
  }, [dispatch, lastNotificationResponse]);

  useEffect(() => {
    dispatch(setNotifications());
  }, [
    weight,
    weightType,
    exerciseMinutes,
    sleep,
    wake,
    cup,
    notificationChannelID,
    dispatch,
  ]);

  useEffect(() => {
    if (!noticeShown) {
      setDialog('notice');
    }
  }, [noticeShown]);

  useEffect(() => {
    if (goalCompleted === 'ready') {
      dispatch(setCompleted(0));
      navigation.push('Modal', {
        type: 'celebration',
        headerShown: false,
      });
    }
  }, [dispatch, goalCompleted, navigation]);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Progress />
          <Control />
          <Records />
        </View>
        {!!dialog && (
          <DialogWorker
            Name={dialog}
            closeDialogHandler={closeDialogHandler}
            params={{ title: 'Notice', reset: 'risk it!' }}
          />
        )}
      </ScrollView>
      <SmartBanner />
    </>
  );
};

export default Home;
