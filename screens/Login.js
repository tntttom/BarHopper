import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import * as firebase from "react-native-firebase"
//import FBLogin, {LoginManager, AccessToken } from 'react-native-facebook-login'

export default class Login extends React.Component {
 
    constructor(props) {
        super(props)
    
        this.state = ({
          email: "",
          password: "",
          response: ""
        })

        this.loginUser = this.loginUser.bind(this);
      }
    //   _fbAuth(){
    //       LoginManager.logInWithReadPermissions(['public_profile']).then(
    //           function(result){
    //               if(result.isCancelled){
    //                   alert('login cancelled')
    //               } else {
    //                   AccessToken.getCurrentAccessToken().then((accessTokenData) => {
    //                       const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
    //                       firebase.auth().signInWithCredential(credential).then((result) => {
    //                           //promise successful
    //                       }, (error) => {
    //                         this.setState = ({
    //                             response: error.toString()
    //                         })
    //                       })
    //                   }, (error => {
    //                       this.setState = ({
    //                           response: "some error occurred"
    //                       })
    //                   }))
    //               }
    //           },
    //           function(error){
    //               alert('login failed with error ' + error)
    //           }
    //       ); 
    //   }

      async loginUser(){
          try{
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

            this.setState({
                response: "logged in"
            });

            setTimeout(() => {
                this.props.navigation.navigate("Home")
            }, 500);
        
          }catch(error){
            this.setState({
                response: error.toString()
            })
          }
      }


    render(){
        return (

            <Container style= {styles.container}>
                <View flex top>
                    <Text style= {styles.title}>
                         Bar Hopper
                    </Text>
                 </View>
                <Form>
                    <Item style = {{margin: 10}}
                        floatingLabel>
                        <Label>Email</Label>
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize="none"
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </Item>
                    <Item style= {{margin: 10}}
                        floatingLabel>
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
                        onPress={this.loginUser}
                    >
                        <Text style={{ color: 'white' }}>Login</Text>
                    </Button>

                    <Button style={styles.customButton}
                        full
                        rounded
                        primary
                        onPress={() => this.props.navigation.push('SignUp')}
                    >
                        <Text style={{ color: 'white' }}>Sign Up</Text>
                    </Button>
                    <View>
                        <Text style= {styles.response}>{this.state.response}</Text>
                    </View>
                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    customButton: {
        marginTop: 10,
        backgroundColor: "#4DAFB2",
        margin: 10
    },
    title: {
        paddingBottom: 16,
        textAlign: "center",
        color: "#000",
        fontSize: 35,
        fontWeight: "bold",
        opacity: 0.8,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
      //  alignItems: 'center',
        justifyContent: 'center',

    },
    response: {
        textAlign: "center",
        paddingTop: 0,
        padding: 50
    }
});