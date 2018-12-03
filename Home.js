import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button 
          title="Go To Map"
          color='red'
          onPress={() => this.props.navigation.push('MapScreen')}
          />
        
        <Button
          title="Go To List"
          color='red'
          onPress={() => this.props.navigation.push('ListScreen')}
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