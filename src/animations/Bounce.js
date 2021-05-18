import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

const Bounce = ({ children }) => {
  let animatedValue = useRef(new Animated.Value(0)).current;

  const size = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  const doFloat = useCallback(() => {
    return Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.in(Easing.bounce),
      useNativeDriver: false,
    });
  }, [animatedValue]);

  useEffect(() => {
    let float = doFloat();
    float.start(() => {float.reset();});
    return () => {
      animatedValue.removeAllListeners();
    };
  }, [animatedValue, doFloat, children]);

  return (
    <Animated.View
      style={{ opacity: animatedValue, width: size}}>
      {children}
    </Animated.View>
  );
};

export default Bounce;
