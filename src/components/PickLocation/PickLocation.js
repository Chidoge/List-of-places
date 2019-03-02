import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';



class PickLocation extends React.Component {

    

    render() {

        return (
            <View style = {styles.container }>
                <View style = {styles.placeHolder}>
                    <Text>
                        Map
                    </Text>
                </View>
                <View style = {styles.button}>
                    <Button title = 'Locate me' onPress = { () => { alert('Pick location') }}/>
                </View>
            </View>
        );
    }

}

export default PickLocation;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    placeHolder: {
        margin: 5,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150
    },
    button: {
        margin: 8
    }
})