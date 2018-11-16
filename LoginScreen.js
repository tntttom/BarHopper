import React, {Component} from "react";
import {Text, View, Button, StyleSheet} from 'react-native';

// will implement firebase

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text> Log In </Text>
                <Button
                    title = "Sign Up"
                    /*
                    onPress = {() this.props.navigation.push('')}
                    -- will also add. should i keep everything on this screen or make a separate log in screen?
                    */
                />
                <Button
                    title = "Log in with Facebook"
                    /*
                    onPress = {() this.props.navigation.push('')}
                    -- this part (once Firebase is implemented) will go to facebook log in --
                    */
                />
                <Button
                    title = "Log in with email"
                    /*
                    onPress = {() this.props.navigation.push('')}
                    -- add account
                    */
                />
            </View>        
            
        );
    }
}

const styles = StyleSheet.create(
    {
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    }
}
)
