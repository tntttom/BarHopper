import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Segment, Container} from 'react-native';
import BarCell from './BarCell';

export default class ListScreen extends React.Component {

  _onPressCell(){
    
    this.props.navigation.push('InfoScreen')

  }

  state = {
    markers: [
      {
        name : 'Tommy'
      },
      {
        name : 'Tyler'
      },
      {
        name: 'Tommy'
      },
      {
        name: 'Ryan'
      },
    ],
  };


    static navigationOptions = {
  
     };
  


    render () {
      return (

             
      
      
  
        <ScrollView style={styles.listView}>

          <Button first onPress={() => this.props.navigation.push('MapScreen')}
          color='red'
          title='TouchMe' />
         

          <Button  onPress={() => this.props.navigation.push('ListScreen')} disabled='true'
          title='Touch'
          />

          {this.state.markers.map((marker, index) => (
              <TouchableOpacity onPress={() => this.props.navigation.push('InfoScreen')}>

                <BarCell />
            
               </TouchableOpacity>
                ))}

  
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
  