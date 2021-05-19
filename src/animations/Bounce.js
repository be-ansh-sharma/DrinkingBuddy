import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

const Bounce = ({ children, repeat, interval }) => {
  let animatedValue = useRef(new Animated.Value(0)).current;

  const size = animatedValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    outputRange: [0, -5, 0, 5, 0, -5, 0, 5, 0],
  });

  const doFloat = useCallback(() => {
    return Animated.timing(animatedValue, {
      toValue: 2,
      duration: 2000,
      easing: Easing.inOut(Easing.linear),
      useNativeDriver: false,
    });
  }, [animatedValue]);

  useEffect(() => {
    let float = doFloat();
    let timer;
    if (repeat && interval) {
      timer = setInterval(() => {
        float.start(() => float.reset());
      }, interval);
    } else {
      float.start();
    }
    float.start(() => float.reset());
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      float.stop();
    };
  }, [animatedValue, doFloat, children, repeat, interval]);

  return (
    <Animated.View
      style={{
        opacity: animatedValue,
        transform: [{ translateY: size }],
      }}>
      {children}
    </Animated.View>
  );
};

export default Bounce;
