import React , {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Content, Header, Form, Input, Button, Item, Label} from 'native-base'

export default class LoginScreen extends React.Component {
    
    constructor(props){
        super(props)

        this.state(
            {
            email: '',
            password: ''
        }
        )
    }
    
    signUpUser = (email,password) => {
        try{
            if(this.state.password.length < 6){
                alert("Please enter at least 6 characters.")
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch(error){
            console.log(error.toString())
        }
   }

    loginUser = (email,password) => {

    }
    render() {
        return (
            <Container style = {styles.container}>
                <Form>
                    <Item floatingLabel>
                        <Label> Email </Label>
                        <Input
                            autoCorrect = {false}
                            autoCapitalize = "none"
                            onChangeText = {(email) => this.setState ({email})}
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label> Password </Label>
                        <Input
                            secureTextEntry = {true}
                            autoCorrect = {false}
                            autoCapitalize = "none"
                            onChangeText = {(password) => this.setState ({password})}
                        />
                    </Item>

                    <Button style = {{marginTop: 10}}
                        full
                        rounded
                        success
                        onPress = {() => this.loginUser(this.state.email,this.state.password)}
                    >
                        <Text style = {{color: 'white'  }}> Login </Text>
                    </Button>


                    <Button style = {{marginTop: 10}}
                        full
                        rounded
                        primary
                        onPress = {() => this.loginUser(this.state.email,this.state.password)}
                    >
                        <Text style = {{color: 'white' }}> Sign Up </Text>
                    </Button>

                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            padding: 10 
        }   
    }
);
