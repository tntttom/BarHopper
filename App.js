/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import AppNavigator from './AppNavigator';  

import { createStackNavigator, createAppContainer } from 'react-navigation';

// import CardOutput from './components/Card';
// import { initApi } from './services/api';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

// //Main Class
// export default class BarHopper extends Component {
//   render() {
//    return (
//       //<RootStack />
//       <AppNavigator />
//    );
//  }
// }


