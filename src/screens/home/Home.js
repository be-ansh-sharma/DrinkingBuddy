import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './Home.style';
import { useDispatch } from 'react-redux';
import { removePerson } from '../../store/actions/person';

const Home = () => {
  const dispatch = useDispatch();
  const removePersonHandler = () => {
    dispatch(removePerson());
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen!</Text>
      <Button title="Remove Person" onPress={removePersonHandler} />
    </View>
  );
};

export default Home;
