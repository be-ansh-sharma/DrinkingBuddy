import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import styles from './Consent.style';
import { useDispatch } from 'react-redux';
import { updatePersonlization, updateConsent } from 'store/actions/information';
import { useNavigation } from '@react-navigation/native';

const Consent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const consentHandler = choice => {
    dispatch(updatePersonlization(choice));
    dispatch(updateConsent());
    navigation.replace('HomeStack', {
      goBack: true,
    });
  };

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      if (!e?.data?.action?.payload?.params?.goBack) {
        e.preventDefault();
      }
    });
  }, [navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('assets/images/splash.png')}
          />
        </View>
        <Text style={styles.subheading}>
          Drinking Buddy - Drink Water Reminder asks for your consent to use
          your personal data to:
        </Text>
        <View style={styles.permission}>
          <Text style={styles.item}>
            {
              '\u2022 Personalised ads and content, ad and content measurement, audience insights and product development'
            }
          </Text>
          <Text style={styles.item}>
            {'\u2022 Store and/or access information on a device'}
          </Text>
        </View>
        <View style={styles.permission}>
          <Text style={styles.item}>
            Your personal data will be processed and information from your device
            (cookies, unique identifiers, and other device data) may be stored by,
            accessed by and shared with third party vendors, or used specifically
            by this site or app.
          </Text>
        </View>
        <View style={styles.consentWrapper}>
          <Button
            mode="contained"
            onPress={() => consentHandler(true)}
            style={styles.item}>
            Consent
          </Button>
          <Button
            mode="contained"
            onPress={() => consentHandler(false)}
            style={styles.item}>
            Do Not Consent
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Consent;
