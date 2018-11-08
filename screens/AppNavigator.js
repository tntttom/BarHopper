import { createStackNavigator } from 'react-navigation';
import React, { Component } from "react";
import { Text } from 'react-native';
import MapScreen from './MapScreen';
import Home from './Home';
import ListScreen from './ListScreen';
import BarInformationScreen from './BarInformationScreen';

//Everytime a new screen is added, import it here 
const AppNavigator = createStackNavigator({
        Home: { 
            screen: Home,
            navigationOptions: ({ navigation }) => ({ header: null, })
        },
        MapScreen: { 
            screen: MapScreen,
        },
        ListScreen: { 
            screen: ListScreen
        },
        BarInformationScreen: {
            screen: BarInformationScreen,
        },
            
    },

    {
        initialRouteName:'Home',
    }
);

export default AppNavigator;