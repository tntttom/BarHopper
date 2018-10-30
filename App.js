/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { createStackNavigator, } from 'react-navigation';

 
class HomeScreen extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button 
          title="Go To Map"
          onPress={() => this.props.navigation.push('Map')}
          />
        
        <Button
          title="Go To List"
          onPress={() => this.props.navigation.push('List')}
        />
      </View>
    );  
  }
}

class BarCell extends Component {
  render() {
    return(
      <View style ={styles.cellContainer}>
        <View style={styles.imageCellContainer}>

        </View>

        </View>
    );
  }
}

class ListScreen extends React.Component {
  render () {
    return (
      <ScrollView>
        <BarCell/>
        
        <BarCell/>

        <BarCell/>

      </ScrollView>
    );
  }
}

class MapScreen extends React.Component {
  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Map Screen</Text>
    </View>
    );  
  }
}

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
export default class BarHopper extends Component {
  render() {
   return (
      <RootStack />
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


