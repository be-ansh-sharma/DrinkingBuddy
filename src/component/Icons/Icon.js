import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppIcons = props => {
  const { name, size, color, style, pressHandler } = props;

  const iconPressHanlder = () => {
    if (pressHandler) {
      pressHandler();
    }
  };

  return (
    <Pressable
      onPress={iconPressHanlder}
      style={{ ...style }}
      android_ripple={true}>
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
};

export default AppIcons;
