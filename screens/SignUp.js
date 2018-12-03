import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import * as firebase from "react-native-firebase"

export default class Login extends React.Component {
 
    constructor(props) {
        super(props)
    
        this.state = ({
          email: "",
          password: "",
          response: ""
        })

        this.signUpUser = this.signUpUser.bind(this);
      }
    
      async signUpUser(){
          try{
              await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

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

                    <Button style={{marginTop: 10}}
                        full
                        rounded
                        success
                        onPress={this.signUpUser}
                    >
                        <Text style={{ color: 'white' }}>Sign Up</Text>
                    </Button>

                    <Button style={{marginTop: 10}}
                        full
                        rounded
                        primary
                        onPress={() => this.props.navigation.push('Login')}
                    >
                        <Text style={{ color: 'white' }}>Back</Text>
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});