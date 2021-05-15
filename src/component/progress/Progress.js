import React, { useCallback, useEffect, useRef } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import Text from '../text/Text';
import Svg, { G, Circle } from 'react-native-svg';
import { COLOR } from '../../global/styles';
import styles from './Progress.style';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const windowWidth = Dimensions.get('window').width;

const Progress = ({ percentage }) => {
  console.log(windowWidth);
  const size = windowWidth - (20 / 100) * windowWidth;
  const strokeWidth = 10;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const circleRef = useRef();
  const animatedValue = useRef(new Animated.Value(1)).current;

  const animation = useCallback(
    toValue => {
      return Animated.timing(animatedValue, {
        toValue,
        duration: 500,
        useNativeDriver: true,
      }).start();
    },
    [animatedValue],
  );

  useEffect(() => {
    animation(percentage);
    animatedValue.addListener(v => {
      const strokeDashoffset = circumference - (circumference * v.value) / 100;
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [animatedValue, animation, circumference, percentage]);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            cx={center}
            cy={center}
            stroke="#E6E7E8"
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
            strokeOpacity={0.5}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 0) / 100}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </View>
  );
};

export default Progress;
