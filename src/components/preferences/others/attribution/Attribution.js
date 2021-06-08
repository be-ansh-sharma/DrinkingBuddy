import React from 'react';
import { Linking, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Attribution.style';
import PeaceSVG from 'assets/images/peace.svg';
import { COLOR } from 'global/styles';
import Pressable from 'components/pressable/Pressable';

const Attribution = () => {
  const attributionLinHandler = url => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.image}>
        <PeaceSVG
          fill={COLOR.primary}
          width="100%"
          height="100%"
          viewBox="0 0 1000 900"
          preserveAspectRatio="xMinYMin slice"
        />
      </View>
      <View style={styles.heading}>
        <Text style={styles.text}>
          This project would not have been successful without the following
          resources.
        </Text>
      </View>
      <View style={styles.list}>
        <Pressable
          style={styles.listitem}
          android_ripple={null}
          onPress={() => attributionLinHandler('https://undraw.co/')}>
          <Text style={styles.listText}>
            <Text style={styles.hyper}>undraw</Text> Illustrations
          </Text>
        </Pressable>
        <Pressable
          style={styles.listitem}
          android_ripple={null}
          onPress={() =>
            attributionLinHandler('https://themeisle.com/illustrations/')
          }>
          <Text style={styles.listText}>
            <Text style={styles.hyper}>themeisle</Text> Illustrations
          </Text>
        </Pressable>
        <Pressable
          style={styles.listitem}
          android_ripple={null}
          onPress={() =>
            attributionLinHandler('https://lottiefiles.com/DarkMuzishn')
          }>
          <Text style={styles.listText}>
            <Text style={styles.hyper}>Mohammad Turk</Text> from lottiefiles
          </Text>
        </Pressable>
        <Pressable
          style={styles.listitem}
          android_ripple={null}
          onPress={() =>
            attributionLinHandler('https://lottiefiles.com/user/33076')
          }>
          <Text style={styles.listText}>
            <Text style={styles.hyper}>Mr. Mahesh</Text> from lottiefiles
          </Text>
        </Pressable>
        <Pressable
          style={styles.listitem}
          android_ripple={null}
          onPress={() =>
            attributionLinHandler('https://lottiefiles.com/JaloliddinBoltaev')
          }>
          <Text style={styles.listText}>
            <Text style={styles.hyper}>Jaloliddin Bieber</Text> from lottiefiles
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Attribution;
