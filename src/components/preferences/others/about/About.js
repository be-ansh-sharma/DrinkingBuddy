import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import Constants from 'expo-constants';
import styles from './About.style';
import Pressable from 'components/pressable/Pressable';
import { useNavigation } from '@react-navigation/core';

const About = () => {
  const navigation = useNavigation();
  const privacyPolicyHandler = () => {
    navigation.push('Modal', {
      type: 'privacy',
      title: 'Privacy Policy',
    });
  };

  const attributionsHandler = () => {
    navigation.push('Modal', {
      type: 'attribution',
      title: 'Attributions',
    });
  };

  const rateUsHandler = () => {
    console.log('rate');
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
