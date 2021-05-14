import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigations/AppNavigation';
import { useDispatch } from 'react-redux';
import { fetchPerson } from './src/store/actions/person';
import { getInformation } from './src/store/actions/information';
import { StatusBar, LogBox } from 'react-native';
import { COLOR } from './src/global/styles';

LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  const getPersonFromStorage = async () => {
    //dispatch(fetchPerson());
    dispatch(getInformation());
    setIsReady(true);
  };

  if (!isReady) {
    getPersonFromStorage();
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLOR.primary} />
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
