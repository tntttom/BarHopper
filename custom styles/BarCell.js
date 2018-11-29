import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class BarCell extends React.Component {
    render() {
      return(
        <View style ={styles.cellContainer}>
          <View>
  
          </View>
            <View style={styles.imageCellContainer}>
  
            </View>
  
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    cellContainer: {
        height: 100,
        backgroundColor: 'purple',
        flex: 0.25,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderColor: 'gray',
        borderBottomWidth: 1,

    },

    imageCellContainer: {
        width: 100,
        backgroundColor: 'cyan',
        flex: 1,
        borderRadius: 50,
    },

  });
  