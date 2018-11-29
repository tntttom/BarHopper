import React, {Component} from "react";
//import {Text, View, StyleSheet} from 'react-native';
import {Text, View, StyleSheet ,Container, Content, Header, Form, Input, Button, Item, Label} from 'react-native';
// will implement firebase

export default class LoginScreen extends React.Component {
    render() {
        return (
            <Container style ={styles.container}>
                <Form>
                    <Item>
                        <Label>Email</Label>
                            <Input
                                autoCorrect = {false}
                                autoCapitalization = "none"
                            />
                    </Item>

                    <Item>
                        <Label>Password</Label>
                            <Input
                                secureTextEntry = {true}
                                autoCorrect = {false}
                                autoCapitalization = "none"
                            />
                    </Item>

                    <Button style={{marginTop: 10}}>
                        full
                        rounded
                        success 
                    </Button>
                        <Text>Log In</Text>
                </Form>
            </Container>
            
        );
    }
}

const styles = StyleSheet.create(
    {
    container: {
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    }
}
);
