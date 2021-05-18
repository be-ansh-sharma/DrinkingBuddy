import React from 'react';
import { View } from 'react-native';
import styles from './Home.style';
import Text from '../../component/text/Text';
import Progress from '../../component/progress/Progress';
import Control from '../../component/control/Control';

const Home = () => {
  return (
    <View style={styles.container}>
      <Progress />
      <Control />
    </View>
  );
};

export default Home;
