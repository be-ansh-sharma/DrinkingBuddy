import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, StyleSheet, Easing } from 'react-native';

const Shake = ({ children, repeat, interval }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startShake = useCallback(() => {
    return Animated.timing(animatedValue, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: false,
    });
  }, [animatedValue]);

  const styles = StyleSheet.create({
    container: {
      transform: [
        {
          translateX: animatedValue.interpolate({
            inputRange: [0, 0.25, 0.5, 0.75, 1],
            outputRange: [5, -5, 5, -5, 5],
          }),
        },
      ],
    },
  });

  useEffect(() => {
    let timer;
    let shake = startShake();
    if (repeat && interval) {
      timer = setInterval(() => {
        shake.start(() => shake.reset());
      }, interval);
    } else {
      shake.start();
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      shake.stop();
    };
  }, [children, interval, repeat, startShake]);

  return <Animated.View style={styles.container}>{children}</Animated.View>;
};

export default Shake;
