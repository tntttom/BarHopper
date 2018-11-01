/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import AppNavigator from './AppNavigator';  

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
    List: ListScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

//Main Class
export default class BarHopper extends React.Component {
  render() {
   return (
      //<RootStack />
      <AppNavigator/>
   );
 }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 100,

  },

  cellContainer: {
    height: 100,
    backgroundColor: 'gray',
    flex: 0.25,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: 'white',

  },

  imageCellContainer: {
    width: 100,
    backgroundColor: 'orange',
    flex: 1,
    borderRadius: 50,
  },


});


