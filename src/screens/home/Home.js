import React from 'react';
import { View } from 'react-native';
import styles from './Home.style';
import Text from '../../component/text/Text';
import Progress from '../../component/progress/Progress';

const Home = () => {
  return (
    <View style={styles.container}>
      <Progress percentage={80} />
    </View>
  );
};

export default Home;
