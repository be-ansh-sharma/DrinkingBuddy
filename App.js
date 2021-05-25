import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  HomeNavigation,
  InformationNavigation,
} from './src/navigations/AppNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPerson } from './src/store/actions/person';
import { getInformation } from './src/store/actions/information';
import { fetchSlug } from './src/store/actions/slug';
import { StatusBar, LogBox } from 'react-native';
import { COLOR } from './src/global/styles';
import SplashScreen from './src/component/splash/Splash';
import * as Notifications from 'expo-notifications';

LogBox.ignoreLogs(['Reanimated 2', 'Constants']);

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
    };
  },
});

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();
  const isSetupFinished = useSelector(
    state => state.information.isSetupFinished,
  );

  useEffect(() => {
    (async () => {
      await dispatch(fetchPerson());
      await dispatch(getInformation());
      dispatch(fetchSlug());
      setIsReady(true);
    })();
  }, [dispatch]);

  if (!isReady) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLOR.primary} />
      {isSetupFinished ? <HomeNavigation /> : <InformationNavigation />}
    </NavigationContainer>
  );
};

export default App;
