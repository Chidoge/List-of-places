import React from 'react';

import { View, Text, Button } from 'react-native';

import startMainTabs from '../maintabs/startMainTabs';

class AuthScreen extends React.Component {

    onLogin = () => {
        startMainTabs();
    }


    render() {

        return (
            <View>
                <Text>Auth screen</Text>
                <Button title = "Login" onPress = { this.onLogin }/>
            </View>
        );
    }
}

export default AuthScreen;