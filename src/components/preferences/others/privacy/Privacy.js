import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Privacy.style';

const Privacy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tile}>Android App Privacy Policy</Text>
      <Text style={styles.description}>
        We created this App with user's privacy in mind. This app does not
        collect any data or information from the phone or user but to give the
        most omtimal user experience, we request some persmission for.
      </Text>
      <View style={styles.permission}>
        <Text style={styles.item}>{'\u2022 Access to Internet to show ads inside the app'}</Text>
        <Text style={styles.item}>{'\u2022 Read external storage'}</Text>
      </View>
    </View>
  );
};

export default Privacy;
