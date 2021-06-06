import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { COLOR } from 'global/styles';
import History from 'screens/history/History';
import Preferences from 'screens/preferences/Preferences';
import Home from 'screens/home/Home';
import Welcome from 'screens/information/welcome/Welcome';
import Gender from 'screens/information/gender/Gender';
import Weight from 'screens/information/weight/Weight';
import Exercise from 'screens/information/exercise/Exercise';
import Sleep from 'screens/information/sleep/Sleep';
import Wake from 'screens/information/wake/Wake';
import Finish from 'screens/information/finish/Finish';
import About from 'screens/preferences/about/About';
import { Dimensions } from 'react-native';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const defaultOptions = {
  headerLeft: null,
  headerTitle: 'Drinking Buddy',
  headerStyle: {
    backgroundColor: COLOR.primary,
  },
  headerTintColor: COLOR.background,
};

const defaultTabOption = {
  indicatorStyle: {
    backgroundColor: COLOR.primary,
  },
};

const HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={defaultTabOption}
      initialLayout={{ width: Dimensions.get('window').width }}
      sceneContainerStyle={{}}>
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Preferences" component={Preferences} />
    </Tab.Navigator>
  );
};

export const HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={defaultOptions}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerShown: true,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: COLOR.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export const InformationNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={defaultOptions}
      />
      <Stack.Screen name="Gender" component={Gender} options={defaultOptions} />
      <Stack.Screen name="Weight" component={Weight} options={defaultOptions} />
      <Stack.Screen
        name="Exercise"
        component={Exercise}
        options={defaultOptions}
      />
      <Stack.Screen name="Sleep" component={Sleep} options={defaultOptions} />
      <Stack.Screen name="Wake" component={Wake} options={defaultOptions} />
      <Stack.Screen name="Finish" component={Finish} options={defaultOptions} />
    </Stack.Navigator>
  );
};
