import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen';
import ExchangeScreen from '../Screens/ExchangeScreen';
import CustomSideBarMenu from './CustomSideBarMenu'
import User2DetailsScreen from '../Screens/User2DetailsScreen';

export const AppStackNavigator = createStackNavigator({
    User2DetailsScreen: {
        screen: User2DetailsScreen,
        navigationOptions: {
            headerShown: false
        }
    }
},
    {
        contentComponent: CustomSideBarMenu
    }, {
    initialRouteName: 'ProductExchangeList'
}
);