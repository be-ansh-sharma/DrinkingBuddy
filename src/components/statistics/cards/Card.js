import React from 'react';
import { View } from 'react-native';
import styles from './Card.style';
import { useSelector } from 'react-redux';
import { Text } from 'react-native-paper';

const Card = ({ heading, subText, containerStyle, subStyle, headingStyle }) => {
  const { darkMode } = useSelector(state => state.information);
  return (
    <View
      style={
        darkMode
          ? [styles.container, containerStyle, styles.darkContainer]
          : [styles.container, containerStyle]
      }>
      <Text
        style={
          darkMode
            ? [styles.dark, styles.number, headingStyle]
            : [styles.light, styles.number, headingStyle]
        }>
        {heading}
      </Text>
      <Text
        style={
          darkMode
            ? [styles.dark, styles.sub, subStyle]
            : [styles.light, styles.sub, subStyle]
        }>
        {subText}
      </Text>
    </View>
  );
};

export default Card;
