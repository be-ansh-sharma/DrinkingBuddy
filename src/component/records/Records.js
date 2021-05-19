import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Text from '../text/Text';
import styles from './Records.style';
import Icon from '../Icons/Icon';
import Record from './record/Record';
import { COLOR } from '../../global/styles';

const Records = props => {
  let { records } = useSelector(state => state.slug);
  let { nextNotification } = useSelector(state => state.information);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Today's Records</Text>
        <Icon
          name="add-outline"
          size={20}
          color={COLOR.primary}
          android_disableSound={true}
        />
      </View>
      <View style={styles.recordBox}>
        <Record  next={true} />
        {records.map((record, index) => {
          return <Record key={index} />;
        })}
      </View>
    </View>
  );
};

export default Records;
