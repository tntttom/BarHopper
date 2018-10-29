/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Button } from 'react-native';

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


export default class BarHopper extends Component {
  render() {
   return (
     <View style={styles.container}>
       <View style={styles.txtContainer}>
       <Text style={styles.orangeText}> Yo <Br/> Hi <Br/> How Are You </Text>
       <EasyButton title='Test'/>
       </View>
     </View>
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
