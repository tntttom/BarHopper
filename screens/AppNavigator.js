import { createStackNavigator } from 'react-navigation';
import React, { Component } from "react";
import { Text } from 'react-native';

//app screens
import Login from './Login';
import SignUp from './SignUp';
import MapScreen from './MapScreen';
import Home from './Home';
import ListScreen from './ListScreen';
import BarInformationScreen from './BarInformationScreen';

//Everytime a new screen is added, import it here 
const AppNavigator = createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                header: false,
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                header: false,
            }
        },
        Home: { 
            screen: Home,
            navigationOptions: ({ navigation }) => ({ header: null, })
        },
        MapScreen: { 
            screen: MapScreen,
            navigationOptions: ({ navigation }) => ({
                title:'Find your deal',
                headerStyle: {
                    backgroundColor: 'orange'
                }
            })
        },
        ListScreen: { 
            screen: ListScreen,
            navigationOptions: ({ navigation }) => ({
                title:'Bars',
                headerStyle: {
                    backgroundColor: 'orange'
                }
            })
        },
        BarInformationScreen: {
            screen: BarInformationScreen,
            navigationOptions: ({ navigation }) => ({
                title:'Bar Information',
                headerStyle: {
                    backgroundColor: 'orange'
                }
            })
        },
            
    },

    {
        initialRouteName:'Login',
    }
);

export default AppNavigator;