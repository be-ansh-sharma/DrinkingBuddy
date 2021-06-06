import React from 'react';
import { Pressable as AppPressable } from 'react-native';

const Pressable = ({
  children,
  onPress,
  android_disableSound = true,
  android_ripple = { color: 'gray' },
  style,
}) => {
  return (
    <AppPressable
      onPress={onPress}
      android_disableSound={android_disableSound}
      android_ripple={android_ripple}
      style={style}>
      {children}
    </AppPressable>
  );
};

export default Pressable;
