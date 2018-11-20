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
        <View style ={{marginTop: 50, flex: 1}}>
          <View style={{flex:0.12, flexDirection: "row", justifyContent: "flex-end"}}>
            <Button first onPress={() => this.props.navigation.push('MapScreen')}
              color='red'
               title='TouchMe' />
         

           <Button  onPress={() => this.props.navigation.push('ListScreen')} disabled
             title='Touch'
            />
          </View>
          

            <ScrollView style={styles.listView}>

        

          {this.state.markers.map((marker, index) => (
              <TouchableOpacity onPress={() => this.props.navigation.push('InfoScreen')}>

                <BarCell />
            
               </TouchableOpacity>
                ))}

  
        </ScrollView>

        </View>
             
      
      
  
      



      );
    }
  }

  const styles = StyleSheet.create({
    listView: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 10,
    
      },

  });
  