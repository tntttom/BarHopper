import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import BarCell from './BarCell';

export default class ListScreen extends React.Component {
    static navigationOptions = { };
  
    render () {
      return (
  
        <ScrollView style={styles.listView}>
  
          <View>
          <Button
            title='Map'
            onPress={() => this.props.navigation.push('MapScreen')}
          />
          <Button
            title='List'
            disabled={true}
            onPress={() => this.props.navigation.push('ListScreen')}
          />
          </View>
          
  
          <BarCell/>

          <BarCell/>
  
          <BarCell/>
  
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    listView: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 100,
    
      },

  });
  