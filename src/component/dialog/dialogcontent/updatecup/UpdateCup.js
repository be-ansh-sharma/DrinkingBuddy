import React, { useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import Text from '../../../text/Text';
import LottieView from 'lottie-react-native';
import styles from './UpdateCup.style';
import { Badge } from 'react-native-paper';

const cupSize = {
  1: {
    label: '1/4',
    value: 1 / 4,
  },
  2: {
    label: '2/4',
    value: 2 / 4,
  },
  3: {
    label: '3/4',
    value: 3 / 4,
  },
  4: {
    label: '4/4',
    value: 1,
  },
};

const UpdateCup = ({ cup, dailyGoalType, cupChangeHandler }) => {
  const cupRef = useRef();
  const [cupSelected, setCupSelected] = useState(4);

  const cupPressHandler = index => {
    let oldValue = 70 - Math.ceil(70 * cupSize[cupSelected].value);
    cupRef.current.play(oldValue, 70 - Math.ceil(70 * cupSize[index].value));
    setCupSelected(+index);
    cupChangeHandler(Math.ceil(cup * cupSize[index].value));
  };

  return (
    <View>
      <View style={styles.animation}>
        <LottieView
          ref={cupRef}
          loop={false}
          source={require('../../../../../assets/animation/water.json')}
        />
      </View>
      <View style={styles.cupWrapper}>
        {Object.keys(cupSize).map(key => {
          let { label, value } = cupSize[key];
          return (
            <Pressable
              onPress={() => cupPressHandler(key)}
              android_ripple={true}
              key={key}>
              <Badge
                style={
                  cupSelected === +key
                    ? { ...styles.badge, ...styles.badgeSelected }
                    : styles.badge
                }
                size={30}>
                {label}
              </Badge>
              <Text
                style={
                  cupSelected === +key
                    ? { ...styles.badgeText, ...styles.badgeTextSelected }
                    : styles.badgeText
                }>
                {Math.ceil(value * cup)} {dailyGoalType}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default UpdateCup;
