import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Segment, Container} from 'react-native';
import BarCell from './BarCell';
import axios from 'axios';


const LATITUDE = 41.880060;
const LONGITUDE = -87.626420;
const config = {
  headers: {'Authorization': 'Bearer rrGvy4AFVjsJ-dhNPO0AwETST5IPBbnazdu3ZDIw6r-th1pZLrkV7wvTxI_UW15yAjSCncL62CJWaTL9vLj3W5xlwdYvEj3Oz-J0RRdac4v4qh_WNw-aksbRFWQEXHYx'},
  params: {
      term: 'Tourist Must See List',
      radius: 0.5,
      latitude: LATITUDE,
      longitude: LONGITUDE,
      sort_by: 'distance',
      limit: 5,
  }
}



export default class ListScreen extends Component {

  _onPressCell(){
    
    this.props.navigation.push('InfoScreen')

  }

  state = {
    
    position: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    data: [],


  };


    getLocation = () => {
      return new Promise((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(
          position => {
            let newPosition = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            config.params.latitude = newPosition.latitude;
            config.params.longitude = newPosition.longitude;


            this.setState({
              position: newPosition,
            });
            resolve(true);
          }, 
          err => {
            console.log('error');
            console.log(err);
            reject(reject);
          },
          {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000}
        );
      });
    };

      async componentWillMount() {
        await this.getLocation();
        
        
        

      }
  
      async componentDidMount() {
        // this.watchID = navigator.geolocation.watchPosition(
        //   (position) => {
        //     this.setState({position});
        //   },
        //   (error) => alert(error),
        //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        //   );
        // await this.getLocation();
        // await this.fetchData();
        await this.fetchData();

        console.log(this.state.data)
      }
      //Fetching from local server, server fetches frmo API: Order goes: API>Server>App
      async fetchData() {
        return axios
          .get('http://localhost:3030/yelp.json')
          .then(responseJSON => {
            this.setState({
              isLoading: false,

              data: responseJSON.data.businesses,

            });
          })
          .catch(error => {
            console.log(error);
          });
      }



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

        

          {this.state.data.map((business,index) => (

              <TouchableOpacity onPress={() => this.props.navigation.push('InfoScreen')}
              key={business.alias}>

                <BarCell  sourceURL={business.image_url}
                name ={business.name}
                phone = {business.display_phone}
                />

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
  