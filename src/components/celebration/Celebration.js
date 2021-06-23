import React, { useEffect, useRef } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Celebration.style';
import { Text } from 'react-native-paper';
import Fade from 'animations/Fade';
import IconButton from 'components/buttons/iconbutton/IconButton';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { COLOR } from 'global/styles';

const Celebration = () => {
  const celebrationRef = useRef();
  const darkMode = useSelector(state => state.information.darkMode);
  const navigation = useNavigation();

  useEffect(() => {
    if (celebrationRef) {
      celebrationRef.current.play();
    }

    const timer = setTimeout(() => {
      navigation.goBack();
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  });

  const nextScreenHanlder = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}>
      <StatusBar backgroundColor={darkMode ? COLOR.dark : COLOR.background} />
      <View style={styles.animation}>
        <LottieView
          ref={celebrationRef}
          loop={false}
          style={styles.animation}
          source={require('assets/animation/target.json')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Goal Completed!</Text>
      </View>
      <Fade>
        <View style={styles.textContainer}>
          <Text style={styles.text}>You are a Rockstar!</Text>
        </View>
      </Fade>
      <IconButton
        onPress={nextScreenHanlder}
        icon="arrow-forward-circle-outline">
        Keep Going
      </IconButton>
    </ScrollView>
  );
};

export default Celebration;
