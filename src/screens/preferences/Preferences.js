import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './Preferences.style';
import General from 'components/preferences/general/General';
import Personal from 'components/preferences/personal/Personal';
import Others from 'components/preferences/others/Others';

const Preferences = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <General />
        <Personal />
        <Others />
      </View>
    </ScrollView>
  );
};

export default Preferences;
