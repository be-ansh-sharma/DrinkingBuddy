import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './Preferences.style';
import General from 'components/preferences/general/General';
import Personal from 'components/preferences/personal/Personal';
import Others from 'components/preferences/others/Others';
import SmartBanner from 'components/banners/SmartBanner';

const Preferences = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <General />
          <Personal />
          <Others />
        </View>
      </ScrollView>
      <SmartBanner />
    </>
  );
};

export default Preferences;
