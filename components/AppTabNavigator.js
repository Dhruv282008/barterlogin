import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ExchangeScreen from '../Screens/ExchangeScreen';



export const AppTabNavigator = createBottomTabNavigator({
    ExchangeScreen : {
    screen: ExchangeScreen,
    navigationOptions :{
        tabBarIcon: <Image source={require('../assets/exchange.png')} style={{ width: 20, height: 20 }} />,
        tabBarlabel: "Exhange" 
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions :{
        tabBarIcon: <Image source={require("../assets/home.png")} />,
        tabBarlabel: "Home",
    }
  }
});



