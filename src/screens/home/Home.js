import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './Home.style';
import Progress from '../../component/progress/Progress';
import Control from '../../component/control/Control';
import Records from '../../component/records/Records';

const Home = () => {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Progress />
          <Control />
          <Records />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
