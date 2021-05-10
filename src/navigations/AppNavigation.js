import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { COLOR } from '../global/styles';
import History from '../screens/history/History';
import Preferences from '../screens/preferences/Preferences';
import Home from '../screens/home/Home';
import Welcome from '../screens/information/welcome/Welcome';
import Gender from '../screens/information/gender/Gender';
import Weight from '../screens/information/weight/Weight';
import Exercise from '../screens/information/exercise/Exercise';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Preferences" component={Preferences} />
    </Tab.Navigator>
  );
};

const defaultOptions = {
  headerShown: true,
  headerLeft: null,
  headerTitle: 'Drinking Buddy',
  headerStyle: {
    backgroundColor: COLOR.primary,
  },
  headerTintColor: COLOR.background,
};

function AppNavigation() {
  const person = useSelector(state => state.person);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!false ? (
        <Fragment>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ ...defaultOptions, headerShown: false }}
          />
          <Stack.Screen
            name="Gender"
            component={Gender}
            options={{ ...defaultOptions, headerShown: false }}
          />
          <Stack.Screen
            name="Weight"
            component={Weight}
            options={{ ...defaultOptions, headerShown: false }}
          />
          <Stack.Screen
            name="Exercise"
            component={Exercise}
            options={{ ...defaultOptions, headerShown: false }}
          />
        </Fragment>
      ) : (
        <Stack.Screen name="HomeTab" component={HomeTab} />
      )}
    </Stack.Navigator>
  );
}

export default AppNavigation;
