/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import AppNavigator from './screens/AppNavigator';  
import firebase from 'react-native-firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCNcde-AQjdFODvOVQbh6-oTwgqczxYiVw",
  authDomain: "barhopperapp1.firebaseapp.com",
  databaseURL: "https://barhopperapp1.firebaseio.com",
  projectId: "barhopperapp1",
  storageBucket: "barhopperapp1.appspot.com",
  messagingSenderId: "158707986434"
};
 
firebase.initializeApp(firebaseConfig);

//Main Class
export default class BarHopper extends React.Component {

  render() {
   return (
      //<RootStack />
      <AppNavigator/>
   );
 }
}


