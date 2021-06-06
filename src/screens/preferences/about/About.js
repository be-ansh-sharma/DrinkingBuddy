import React from 'react';
import { Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import styles from './About.style';

const About = () => {
  return (
    <View style={styles.container}>
      <Image source={require('assets/images/splash.png')} />
      <View style={styles.appContainer}>
        <Text>Drinking Buddy App</Text>
        <Text>{Constants.nativeAppVersion}</Text>
      </View>
    </View>
  );
};

export default About;
