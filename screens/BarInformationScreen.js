import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';

export default class BarInformationScreen extends React.Component {
  
    render () {
      return (
        <View style={styles.container}> 
            <Text>insert bar image</Text>
            <Text>insert bar name</Text>
            <Text>insert bar description</Text>
            <Button
                title='Get Directions'
                //navigate to google maps
                />

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
      },
  });
  