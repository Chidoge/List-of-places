import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

import startMainTabs from '../maintabs/startMainTabs';

class AuthScreen extends React.Component {

    onLogin = () => {
        startMainTabs();
    }


    render() {

        return (
            <View>
                <Text style = { styles.title }>Auth screen</Text>
                <View style = { styles.button} >
                    <Button title = "Login" onPress = { this.onLogin }/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title : {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 28,
        margin: 30
    },
    button : {
        alignItems: 'center'
    }
});
export default AuthScreen;