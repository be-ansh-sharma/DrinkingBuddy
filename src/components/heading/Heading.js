import React from 'react';
import { Text } from 'react-native-paper';
import styles from './Heading.style';

const Heading = ({ children, style }) => {
  return <Text style={{ ...styles.heading, ...style }}>{children}</Text>;
};

export default Heading;
