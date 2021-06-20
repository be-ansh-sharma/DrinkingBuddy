import React, { useRef } from 'react';
import { View } from 'react-native';
import Pressable from 'components/pressable/Pressable';
import styles from './Control.style';
import Icon from 'components/Icons/Icon';
import { COLOR } from 'global/styles';
import { Text } from 'react-native-paper';
import { setCompleted } from 'store/actions/information';
import { addRecord } from 'store/actions/slug';
import { useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';
import Shake from 'animations/Shake';
import Bounce from 'animations/Bounce';
import { AdMobInterstitial } from 'expo-ads-admob';
import { getadUnitID } from 'global/CONSTANTS';

const Control = props => {
  const dispatch = useDispatch();
  const addref = useRef();

  const addHandler = () => {
    dispatch(setCompleted());
    dispatch(addRecord());
  };

  const adPressHandler = async () => {
    await AdMobInterstitial.setAdUnitID(getadUnitID('fullScreen'));
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  };

  return (
    <View style={styles.container}>
      <View style={styles.ads}>
        <Shake repeat={true} interval={6000}>
          <Icon
            name="gift-outline"
            size={40}
            color={COLOR.primary}
            pressHandler={adPressHandler}
          />
          <Pressable onPress={adPressHandler} android_ripple={null}>
            <Text style={styles.adsText}>ADS</Text>
          </Pressable>
        </Shake>
      </View>
      <Pressable
        android_ripple={{}}
        style={styles.add}
        onPress={() => addref.current.play()}>
        <LottieView
          ref={addref}
          loop={false}
          onAnimationFinish={addHandler}
          source={require('assets/animation/water.json')}
        />
      </Pressable>
      <View style={styles.infoContainer}>
        <Bounce repeat={true} interval={20 * 1000}>
          <Icon
            name="caret-up-outline"
            size={20}
            color={COLOR.primary}
            android_disableSound={true}
          />
        </Bounce>
        <Text style={styles.infoText}>Confirm that you drunk the water</Text>
      </View>
      <View style={styles.change}>
        <Text>
          <Icon name="cafe-outline" size={40} color={COLOR.primary} />
        </Text>
        <Text style={styles.superText}>
          <Icon name="sync-outline" size={20} color={COLOR.primary} />
        </Text>
      </View>
    </View>
  );
};

export default Control;
