class ListScreen extends React.Component {
    static navigationOptions = { };
  
    render () {
      return (
  
        <ScrollView style={styles.listView}>
  
          <View>
          <Button
            title='Map'
            onPress={() => this.props.navigation.push('Map')}
          />
          <Button
            title='List'
            disabled={true}
            onPress={() => this.props.navigation.push('List')}
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
        backgroundColor: 'orange',
        flex: 1,
        paddingTop: 100,
    
      },

  });
  