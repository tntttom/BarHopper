import React, {Component} from "react";
import {Text, View, StyleSheet} from 'react-native';
//import {Text, View, StyleSheet ,Container, Content, Header, Form, Input, Button, Item, Label} from 'react-native';
//will implement firebase

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View styles={styles.container}>
                <Button
                    title = "Email"
                /> 

                <Button 
                    title = "Password"
                />
            </View> 
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'cyan',
            alignItems: 'center',
            justifyContent: 'center'
        }   
    }
);
