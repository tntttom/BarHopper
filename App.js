/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import AppNavigator from './AppNavigator';  
import Firebase from './Firebase';

//Main Class
export default class BarHopper extends React.Component {
  render() {
   return (
      //<RootStack />
      <AppNavigator/>
   );
 }

/* 
  var firebase = require('firebase');
  var app = firebase.initializeApp({BarHopper});
*/

}


