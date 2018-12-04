import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import * as firebase from "react-native-firebase"
const rootRef = firebase.database().ref();
const nameRef = rootRef.child("name");

export default class SignUp extends React.Component {
 
    constructor(props) {
        super(props)
    
        this.state = ({
          name: "",
          email: "",
          password: "",
          response: ""
        })

        this.signUpUser = this.signUpUser.bind(this);
      }
    
      async signUpUser(){
          try{
              await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);  
              firebase.database().ref("users").set(
                  {
                      name: this.state.name
                  }
              )
              this.setState({
                response: "account created"
              });

              setTimeout(() => {
                this.props.navigation.navigate("Home")
              }, 1000);

          } catch(error){
              this.setState({
                  response: error.toString()
              })
          }
      }

    render(){
        return (
            <Container>
                <Form>
                    <Item floatingLabel>
                        <Label>Name</Label>
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize="none"
                            onChangeText={(name) => this.setState({ name })}
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize="none"
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input 
                            secureTextEntry={true}
                            autoCorrect={false} 
                            autoCapitalize="none"
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </Item>

                    <Button style={styles.customButton}
                        full
                        rounded
                        success
                        onPress={this.signUpUser}
                    >
                        <Text style={{ color: 'white' }}>Sign Up</Text>
                    </Button>

                    <View>
                        <Text>{this.state.response}</Text>
                    </View>
                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    customButton: {
        marginTop: 15,
        backgroundColor: "#4DAFB2",
        margin: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});