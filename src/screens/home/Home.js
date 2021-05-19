import React from 'react';
import { View } from 'react-native';
import styles from './Home.style';
import Text from '../../component/text/Text';
import Progress from '../../component/progress/Progress';
import Control from '../../component/control/Control';
import Records from '../../component/records/Records';

const Home = () => {
  return (
    <View style={styles.container}>
      <Progress />
      <Control />
      <Records />
    </View>
  );
};

export default Home;
