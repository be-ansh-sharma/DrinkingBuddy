import React from 'react';
import { Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import styles from './About.style';
import Pressable from 'components/pressable/Pressable';

const About = () => {
  const privacyPolicyHandler = () => {
    console.log('policy');
  };

  const attributionsHandler = () => {
    console.log('attributionsHandler');
  };

  const rateUsHandler = () => {
    console.log('rateUsHandler');
  };

  return (
    <View style={styles.container}>
      <Image source={require('assets/images/splash.png')} />
      <View style={styles.appContainer}>
        <Text>Drinking Buddy App</Text>
        <Text>{Constants.nativeAppVersion}</Text>
      </View>
      <View style={styles.linkContainer}>
        <View style={styles.links}>
          <Pressable android_ripple={null} onPress={privacyPolicyHandler}>
            <Text style={styles.text}>Privacy Policy</Text>
          </Pressable>
          <Pressable android_ripple={null} onPress={attributionsHandler}>
            <Text style={styles.text}>Attributions</Text>
          </Pressable>
          <Pressable android_ripple={null} onPress={rateUsHandler}>
            <Text style={styles.text}>Rate Us</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default About;
