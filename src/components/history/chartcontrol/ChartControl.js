import React from 'react';
import { View } from 'react-native';
import Icon from 'components/Icons/Icon';
import { COLOR } from 'global/styles';
import { Text } from 'react-native-paper';
import styles from './ChartControl.style';
import dayjs from 'global/day';

const ChartControl = ({
  display,
  nextControlHandler,
  previousControlHandler,
}) => {
  const noNextMonth = display
    .add(1, 'month')
    .isAfter(dayjs().date(dayjs().daysInMonth()));

  return (
    <View style={styles.container}>
      <Icon
        name="chevron-back-outline"
        size={30}
        color={COLOR.primary}
        pressHandler={nextControlHandler}
      />
      <Text style={styles.text}>{display.format('MMMM, YYYY')}</Text>
      <Icon
        name="chevron-forward-outline"
        size={30}
        color={noNextMonth ? COLOR.faded : COLOR.primary}
        pressHandler={noNextMonth ? null : previousControlHandler}
      />
    </View>
  );
};

export default ChartControl;
