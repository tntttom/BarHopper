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

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyCNcde-AQjdFODvOVQbh6-oTwgqczxYiVw",
      authDomain: "barhopperapp1.firebaseapp.com",
      databaseURL: "https://barhopperapp1.firebaseio.com",
      projectId: "barhopperapp1",
      storageBucket: "barhopperapp1.appspot.com",
      messagingSenderId: "158707986434"
    };
    firebase.initializeApp(config);

    firebase.database().ref("users/001").set(
      {
        name: 'Tyler Nguyen',
        age: 21
     }
    ).then(() => {
      console.log('INSERTED');
    }).catch((error) => {
      console.log('INSERTED');
    });
  }

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


