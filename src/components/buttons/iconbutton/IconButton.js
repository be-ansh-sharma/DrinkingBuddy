import React from 'react';
import { View, Pressable } from 'react-native';
import Icon from '../../Icons/Icon';
import Text from '../../text/Text';
import styles from './IconButton.style';

const IconButton = props => {
  const { onPress, icon, children, buttonStyle } = props;
  const pressHanlder = () => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <Pressable
      android_ripple="true"
      onPress={pressHanlder}
      style={[styles.button, buttonStyle]}>
      <View style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>{children}</Text>
        <Icon name={icon} size={30} color="white" pressHandler={pressHanlder} />
      </View>
    </Pressable>
  );
};

export default IconButton;
