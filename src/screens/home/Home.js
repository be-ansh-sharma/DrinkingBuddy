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

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { weight, weightType, exerciseMinutes, sleep, wake } = useSelector(
    state => state.person,
  );
  const goalCompleted = useSelector(state => state.information.goalCompleted);
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

    return () => {
      responseSubscription.remove();
    };
  });

  useEffect(() => {
    dispatch(setNotifications());
  }, [weight, weightType, exerciseMinutes, sleep, wake, dispatch]);

  useEffect(() => {
    if (goalCompleted === 'ready') {
      dispatch(setCompleted(0));
      navigation.push('Modal', {
        type: 'celebration',
        headerShown: false,
      });
    }
  }, [dispatch, goalCompleted, navigation]);

  console.log('home');
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
