/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import * as firebase from 'firebase';
import AppNavigator from './AppNavigator';  

// initialize Firebase
/*const firebaseConfig = {
  apiKey: "AIzaSyD5DIJen29jZ5a89FneKVtE8tXEUXvJS1Q",
  authDomain: "barhopper-83e3a.firebaseapp.com",
  databaseURL: "https://barhopper-83e3a.firebaseio.com",
  projectId: "barhopper-83e3a",
  storageBucket: "barhopper-83e3a.appspot.com",
  messagingSenderId: "494148410560"
};

firebase.initializeApp(firebaseConfig);*/

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


