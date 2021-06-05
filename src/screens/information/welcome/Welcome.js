import React, { useState } from 'react';
import { View } from 'react-native';
import Text from 'components/text/Text';
import Fade from 'animations/Fade';
import styles from './Welcome.style';
import IconButton from 'components/buttons/iconbutton/IconButton';

const Welcome = props => {
  const [showNext, setShowNext] = useState(false);

  const animationEnd = () => {
    setShowNext(true);
  };

  const nextScreenHanlder = () => {
    props.navigation.navigate('Gender');
  };

  return (
    <View style={styles.container}>
      <Fade animationEnd={animationEnd}>
        <Text style={styles.heading}>Hi,</Text>
        <Text style={styles.heading}>I'm you drinking buddy companion</Text>
        <Text style={styles.subText}>
          In order to provide you with the tailored advice. I would need some of
          your basic information. This will be secret between us!
        </Text>
      </Fade>
      {!!showNext && (
        <IconButton
          onPress={nextScreenHanlder}
          icon="arrow-forward-circle-outline">
          Let's Start
        </IconButton>
      )}
    </View>
  );
};

export default Welcome;
