import React from 'react';
//import { Text } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Text.style';

const MyText = props => {
  return (
    <Text {...props} style={{ ...styles.text, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default MyText;
