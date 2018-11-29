import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'

export default class Login extends React.Component {
    render(){
        return (
            <Container styles={styles.container}>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize="none"
                        />
                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input 
                            secureTextEntry={true}
                            autoCorrect={false} 
                            autoCapitalize="none"
                        />
                    </Item>

                    <Button style={{marginTop: 10}}
                        full
                        rounded
                        success
                    >
                        <Text style={{ color: 'white' }}>Login</Text>
                    </Button>

                    <Button style={{marginTop: 10}}
                        full
                        rounded
                        primary
                    >
                        <Text style={{ color: 'white' }}>Signup</Text>
                    </Button>
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