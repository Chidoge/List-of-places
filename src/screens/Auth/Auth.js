import React from 'react';

import { View, Button, StyleSheet } from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';

import startMainTabs from '../maintabs/startMainTabs';

class AuthScreen extends React.Component {

    onLogin = () => {
        startMainTabs();
    }


    render() {

        return (
            <View style = {styles.container}>

                <MainText >
                    <HeadingText text = 'Sign in to continue' />
                </MainText>

                <Button title = "Switch to login" onPress = { this.onLogin }/>

                <View style = {styles.inputContainer}>
                    <DefaultInput style = {styles.input} placeholder = 'Email' />
                    <DefaultInput style = {styles.input} placeholder = 'Password' />
                    <DefaultInput style = {styles.input} placeholder = 'Confirm password' />
                </View>

                <Button title = "Submit" onPress = { this.onLogin }/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        margin: 10
    },
    input: {
        backgroundColor: '#eee',
        borderColor: '#bbb'
    }
});
export default AuthScreen;