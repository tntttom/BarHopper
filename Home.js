// import libraries
import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Home Screen </Text>
       
      <Image 
          /*style = {{width: 200, height: 200, alignContent: 'flex-start'}}
          source = {require('./teeler.jpg')}
        />
      <Image 
          style = {{width: 200, height: 200, alignItems: 'center'}}
          source = {require('./tylerwet.png')}
        />

        <Image
          style = {{width: 200, height: 200, alignItems: 'flex-end'}}
          source = {require('./tyleryikes.jpg')}*/
        />

        <Button 
          title="Go To Map"
          onPress={() => this.props.navigation.push('MapScreen')}
        />
        
        <Button
          title="Go To List"
          onPress={() => this.props.navigation.push('ListScreen')}
        />

        <Button
          title = "Sign Up / Log In"
          onPress = {() => this.props.navigation.push('LoginScreen')}
        />
        
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});