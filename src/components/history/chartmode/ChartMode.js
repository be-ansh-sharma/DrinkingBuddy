import React, { useRef } from 'react';
import { Pressable, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import styles from './ChartMode.style';
import LottieView from 'lottie-react-native';

const ChartMode = ({ mode, modeHandler }) => {
  const switchRef = useRef();

  const switchHandler = () => {
    if (mode === 'month') {
      switchRef.current.play(0, 50);
    } else {
      switchRef.current.play(50, 0);
    }
  };

  console.log('monde is' + mode);

  return (
    <View style={styles.container}>
      <Text
        style={
          mode === 'month'
            ? { ...styles.text, ...styles.selected }
            : styles.text
        }>
        Month
      </Text>
      <Pressable onPress={switchHandler} style={styles.switch}>
        <LottieView
          ref={switchRef}
          loop={false}
          speed={2}
          onAnimationFinish={modeHandler}
          progress={mode === 'month' ? 0 : 1}
          source={require('assets/animation/switch.json')}
        />
      </Pressable>
      <Text
        style={
          mode === 'year' ? { ...styles.text, ...styles.selected } : styles.text
        }>
        Year
      </Text>
    </View>
  );
};

export default ChartMode;
