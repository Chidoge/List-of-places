import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const userInput = (props) => (

    <View style = {styles.inputContainer} >
        <TextInput value = { props.placeName } style = {styles.input } onChangeText = { (event) => { props.onTextChange(event) }}/>
        <Button style = {styles.button} title = "Add item" onPress = { props.onButtonPress }/>
    </View>
);

const styles = StyleSheet.create({

	inputContainer : {
		width : "100%",
		flexDirection : 'row',
		justifyContent : 'space-between',
		alignItems : 'center'
	},
	input : {
		width : "70%",
		borderColor : 'black',
		borderWidth : 1
	},
	button : {
		width : "30%"
	}
})


export default userInput;