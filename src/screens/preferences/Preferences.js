import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './Preferences.style';
import General from 'components/preferences/general/General';
import Personal from 'components/preferences/personal/Personal';

const Preferences = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <General />
        <Personal />
      </View>
    </ScrollView>
  );
};

export default Preferences;
