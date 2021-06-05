import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './Home.style';
import Progress from 'components/progress/Progress';
import Control from 'components/control/Control';
import Records from 'components/records/Records';
import * as Notifications from 'expo-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { addRecord } from 'store/actions/slug';
import { setCompleted, setNotifications } from 'store/actions/information';

const Home = () => {
  const dispatch = useDispatch();
  const { weight, weightType, exerciseMinutes, sleep, wake } = useSelector(
    state => state.person,
  );
  useEffect(() => {
    //dispatch(setNotifications());
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

  useEffect(() => {
    console.log('key changed');
    dispatch(setNotifications());
  }, [weight, weightType, exerciseMinutes, sleep, wake, dispatch]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Progress />
        <Control />
        <Records />
      </View>
    </ScrollView>
  );
};

export default Home;
