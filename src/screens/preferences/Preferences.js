import React from 'react';
import { Text, View } from 'react-native';
import styles from './Preferences.style';
import General from '../../component/preferences/general/General';
import Personal from '../../component/preferences/personal/Personal';

const Preferences = () => {
  return (
    <View style={styles.container}>
      <General />
      <Personal />
    </View>
  );
};

export default Preferences;
