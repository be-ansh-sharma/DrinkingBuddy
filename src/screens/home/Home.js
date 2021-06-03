import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './Home.style';
import Progress from '../../component/progress/Progress';
import Control from '../../component/control/Control';
import Records from '../../component/records/Records';
import * as Notifications from 'expo-notifications';
import { useDispatch } from 'react-redux';
import { addRecord } from '../../store/actions/slug';
import {
  setCompleted,
  setNotifications,
} from '../../store/actions/information';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNotifications());
    const responseSubscription = Notifications.addNotificationResponseReceivedListener(
      () => {
        console.log('clicker');
        dispatch(addRecord());
        dispatch(setCompleted());
        dispatch(setNotifications());
      },
    );

    const NotificationSubscription = Notifications.addNotificationReceivedListener(
      notification => {
        console.log('shown');
        console.log(notification);
      },
    );

    return () => {
      responseSubscription.remove();
      NotificationSubscription.remove();
    };
  });

  return (
    <View style={styles.homeContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Progress />
          <Control />
          <Records />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
