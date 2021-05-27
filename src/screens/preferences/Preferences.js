import React from 'react';
import { Text, View } from 'react-native';
import styles from './Preferences.style';
import General from '../../component/preferences/general/General';

const Preferences = () => {
  return (
    <View style={styles.container}>
      <General />
    </View>
  );
};

export default Preferences;
