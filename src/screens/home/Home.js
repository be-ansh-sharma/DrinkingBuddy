import React from 'react';
import { View } from 'react-native';
import styles from './Home.style';
import Text from '../../component/text/Text';
import Progress from '../../component/progress/Progress';
import { fetchDBNotifications, syncNotifications } from '../../global/database/Database.helper';

const Home = () => {
  fetchDBNotifications();
  return (
    <View style={styles.container}>
      <Progress percentage={60} />
    </View>
  );
};

export default Home;
