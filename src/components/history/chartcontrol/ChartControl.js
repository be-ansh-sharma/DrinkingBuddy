import React from 'react';
import { View } from 'react-native';
import Icon from 'components/Icons/Icon';
import { COLOR } from 'global/styles';
import { Text } from 'react-native-paper';
import styles from './ChartControl.style';

const ChartControl = ({ display }) => {
  const iconHandler = () => {
    console.log('aa');
  };

  return (
    <View style={styles.container}>
      <Icon
        name="chevron-back-outline"
        size={30}
        color={COLOR.primary}
        pressHandler={iconHandler}
      />
      <Text>{display}</Text>
      <Icon
        name="chevron-forward-outline"
        size={30}
        color={COLOR.primary}
        pressHandler={iconHandler}
      />
    </View>
  );
};

export default ChartControl;
