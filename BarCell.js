import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default class BarCell extends React.Component {
    render() {
      return(
        <View style ={styles.cellContainer}>

          <View>
             
  
          </View>
            <Image style={styles.imageCellContainer}
            // source={uri = this.props.sourceURL}
            >
  
            </Image>

            <View style={{alignContent:"center", flex: 0.5}}>

            <Text style={{alignContent: "center", flex: 0.5}}>
              {this.props.name}
            </Text>

            <Text>
              {this.props.phone}
            </Text>



            </View>
            

           
  
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    cellContainer: {
        height: 100,
        backgroundColor: 'white',
        flex: 0.25,
        flexDirection: 'row',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderColor: '#2B9295',
        borderBottomWidth: 0.25,

    },

    imageCellContainer: {
        width: 100,
        backgroundColor: '#2B9295',
        flex: 0.25,
        borderRadius: 48,
    },

  });
  