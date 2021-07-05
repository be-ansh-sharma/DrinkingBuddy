import React, { useCallback, useEffect, useRef } from 'react';
import { View, Animated, Dimensions, Easing } from 'react-native';
import { Text } from 'react-native-paper';
import Svg, { G, Circle } from 'react-native-svg';
import { COLOR } from 'global/styles';
import styles from './Progress.style';
import { useDispatch, useSelector } from 'react-redux';
import { addRecord } from 'store/actions/slug';
import * as Notifications from 'expo-notifications';
import {
  setNotificationToken,
  setCompleted,
  setNotifications,
} from 'store/actions/information';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const windowWidth = Dimensions.get('window').width;
const size = windowWidth - (30 / 100) * windowWidth;
const strokeWidth = 10;
const center = size / 2;
const radius = size / 2 - strokeWidth / 2;
const circumference = 2 * Math.PI * radius;

const Progress = () => {
  const circleRef = useRef();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const { dailyGoal, dailyGoalType } = useSelector(state => state.person);
  const { completed, darkMode, notificationToken } = useSelector(
    state => state.information,
  );
  const lastNotificationResponse = Notifications.useLastNotificationResponse();
  const dispatch = useDispatch();

  const animation = useCallback(
    toValue => {
      return Animated.timing(animatedValue, {
        toValue,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start();
    },
    [animatedValue],
  );

  useEffect(() => {
    let percentage = (completed / dailyGoal) * 100;
    if (completed >= dailyGoal) {
      percentage = 100;
    }
    animation(percentage);
    animatedValue.addListener(v => {
      const strokeDashoffset = circumference - (circumference * v.value) / 100;
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
    return () => {
      animatedValue.removeAllListeners();
    };
  }, [animatedValue, animation, completed, dailyGoal]);

  useEffect(() => {
    let timer;
    if (
      lastNotificationResponse &&
      lastNotificationResponse?.notification?.request?.identifier !==
        notificationToken
    ) {
      timer = setTimeout(() => {
        dispatch(setCompleted());
        dispatch(addRecord());
        dispatch(setNotifications());
        dispatch(
          setNotificationToken(
            lastNotificationResponse?.notification?.request?.identifier,
          ),
        );
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [lastNotificationResponse]);

  return (
    <View style={{ ...styles.container, height: size, width: size }}>
      <View style={styles.progress}>
        <Svg width={size} height={size}>
          <G rotation="-90" origin={center} id="circle">
            <Circle
              cx={center}
              cy={center}
              stroke={darkMode ? 'white' : '#E6E7E8'}
              strokeWidth={10}
              r={radius}
            />
            <AnimatedCircle
              ref={circleRef}
              cx={center}
              cy={center}
              stroke={COLOR.primary}
              strokeWidth={10}
              r={radius}
              strokeOpacity={0.8}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (circumference * 0) / 100}
              strokeLinecap="round"
            />
          </G>
        </Svg>
      </View>
      <View>
        <Text style={styles.heading}>Today's Goal</Text>
        <View style={styles.progressWrapper}>
          <Text style={{ ...styles.text, ...styles.pending }}>
            {Math.round(completed)}{' '}
          </Text>
          <Text style={styles.text}>
            / {dailyGoal} {dailyGoalType}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Progress;
