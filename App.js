import React, { useEffect, useState } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
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
import SplashScreen from './src/components/splash/Splash';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';
import { fontConfig } from './src/global/CONSTANTS';

LogBox.ignoreLogs(['Reanimated 2', 'Constants']);

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    text: 'black',
    primary: COLOR.primary,
    background: COLOR.background,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: COLOR.primary,
    background: COLOR.dark,
  },
};

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();
  const { isSetupFinished, darkMode } = useSelector(state => state.information);

  useEffect(() => {
    if (isReady !== true) {
      dispatch(fetchPerson());
      dispatch(getInformation());
      dispatch(fetchSlug());
      setIsReady(true);
    }
  }, []);

  if (!isReady || isSetupFinished === null) {
    return <SplashScreen />;
  }

  return (
    <PaperProvider theme={darkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
      <NavigationContainer theme={darkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
        <StatusBar backgroundColor={darkMode ? COLOR.dark : COLOR.primary} />
        {isSetupFinished ? <HomeNavigation /> : <InformationNavigation />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
