import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Segment, Container} from 'react-native';
import BarCell from './BarCell';

export default class ListScreen extends Component {

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

          <View style={{flex:0.12, flexDirection: "row", justifyContent: "space-between", paddingRight: 10, paddingLeft: 10}}>

           <TouchableOpacity
              style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width:75,
                height:75,
                backgroundColor:'#fff',
                borderRadius:100,
              }}>
              <Text>Tommy</Text>
            </TouchableOpacity>

            <View style={{flexDirection: "row", marginTop: 20}}>
              <TouchableOpacity first onPress={() => this.props.navigation.push('MapScreen')}
              style={{
                  borderWidth:1,
                  borderColor:'rgba(0,0,0,0.2)',
                  alignItems:'center',
                  justifyContent:'center',
                  width:50,
                  height:25,
                  backgroundColor:'#2B9295',
                  borderRadius:1,
                  
                }}
            >
                <Text style={{color: 'white'}}>Map</Text>
              </TouchableOpacity>

              <TouchableOpacity first onPress={() => this.props.navigation.push('ListScreen')} disabled
               style={{
                   borderWidth:1,
                   borderColor:'rgba(0,0,0,0.2)',
                   alignItems:'center',
                   justifyContent:'center',
                   width:50,
                   height:25,
                   backgroundColor:'gray',
                   borderRadius:1,
                    
                  }}>
                <Text style={{color: 'white'}}>List</Text>
             </TouchableOpacity>
            </View>
            

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
