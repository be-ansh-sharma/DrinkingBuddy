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
import SmartBanner from 'components/banners/SmartBanner';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { weight, weightType, exerciseMinutes, sleep, wake, cup } = useSelector(
    state => state.person,
  );
  const { goalCompleted, notificationChannelID } = useSelector(
    state => state.information,
  );
  useEffect(() => {
    const responseSubscription = Notifications.addNotificationResponseReceivedListener(
      () => {
        dispatch(addRecord());
        dispatch(setCompleted());
        dispatch(setNotifications());
      },
    );

    return () => {
      responseSubscription.remove();
    };
  });

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
      </ScrollView>
      <SmartBanner />
    </>
  );
};

export default Home;
