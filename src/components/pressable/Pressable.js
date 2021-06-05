import React from 'react';
import { Pressable } from 'react-native';

const AppPressable = ({
  children,
  onPress,
  android_disableSound = true,
  android_ripple = { color: 'gray' },
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      android_disableSound={android_disableSound}
      android_ripple={android_ripple}
      style={style}>
      {children}
    </Pressable>
  );
};

export default AppPressable;
