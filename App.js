/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View, StyleSheet, Alert, Button } from 'react-native';
import { createStackNavigator, } from 'react-navigation';


const RootStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Map: {screen: MapScreen},
  },
  {
    initialRouteName: 'Home',
  }
  );

class HomeScreen extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );  
  }
}

class MapScreen extends React.Component {
  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
    );  
  }
}


class Br extends Component {
 render() {
   return (
     <Text> {"\n"}{"\n"} </Text>

   );
 }
}

class EasyButton extends Component {
 render() {
   return (
     <Button
       onPress={() => {
         Alert.alert('Button PPressed!');
       }}
       title={this.props.title}
       />
   )
 }
}

//Main Class
export default class BarHopper extends Component {
  render() {
   return (
      <RootStack />
   );
 }
}



const styles = StyleSheet.create (
 {
   container:  {
     backgroundColor: 'orange',
     flex: 1,
   },

   txtContainer: {
     margin: 50,
   },

   orangeText: {
     color: 'white',
   },

  });
