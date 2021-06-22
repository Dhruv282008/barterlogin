import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import Welcome from './Screens/welcome.js';
import { AppTabNavigator } from './components/AppTabNavigator';
export default function App() {
  return (
    <Welcome/>
  );
}

const switchNavigator = createSwitchNavigator({
  welcome: { screen: Welcome },
  //Add AppDrawerNavigator Reminder
  BottomTab: { screen: AppTabNavigator }
});

const AppContainer =  createAppContainer(switchNavigator);
