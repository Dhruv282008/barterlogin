import React from 'react';
import Image from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import { AppStackNavigator } from './AppStackNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const AppTabNavigator = createBottomTabNavigator({
    Exchange: ({
        screen: AppStackNavigator,
        navigationOptions: {
            tabBarIcon: <Image source={require('../assets/exchange.png')} style={{ width: 20, height: 20 }} />,
            tabBarlabel: "Exhange"         
        },
        Home: ({
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: <Image source={require("../assets/home.png")} />,
                tabBarlabel: "Home",
            }
        })
    })
})