import React, { useCallback, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
const AppAnimation = ({ animationEnd, children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animationEndHanlder = useCallback(() => {
    animationEnd();
  }, [animationEnd]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(animationEndHanlder);
  }, [animationEndHanlder, fadeAnim]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>
  );
};

export default AppAnimation;
