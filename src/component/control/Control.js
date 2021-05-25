import React, { useRef } from 'react';
import { Pressable, View } from 'react-native';
import styles from './Control.style';
import Icon from '../Icons/Icon';
import { COLOR } from '../../global/styles';
import Text from '../text/Text';
import { setCompleted } from '../../store/actions/information';
import { addRecord } from '../../store/actions/slug';
import { useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';
import Shake from '../../animations/Shake';
import Bounce from '../../animations/Bounce';

const Control = props => {
  const dispatch = useDispatch();
  const addref = useRef();

  const addHandler = () => {
    dispatch(setCompleted());
    dispatch(addRecord());
  };

  return (
    <View style={styles.container}>
      <Shake repeat={true} interval={60 * 1000}>
        <View style={styles.ads}>
          <Icon name="gift-outline" size={40} color={COLOR.primary} />
          <Text style={styles.adsText}>ADS</Text>
        </View>
      </Shake>
      <Pressable
        style={styles.add}
        android_ripple={true}
        onPress={() => addref.current.play()}>
        <LottieView
          ref={addref}
          loop={false}
          onAnimationFinish={addHandler}
          source={require('../../../assets/animation/water.json')}
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
