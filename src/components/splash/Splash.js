import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import styles from './Splash.style';

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      <Image source={require('assets/images/splash.png')} />
    </View>
  );
};

export default Splash;
