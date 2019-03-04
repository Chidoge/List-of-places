import React from "react";
import { StyleSheet } from 'react-native';
import DefaultInput from "../UI/DefaultInput/DefaultInput";


const PlaceInput = (props) => {

	return (
		<DefaultInput 
			style = {styles.input} 
			placeholder = 'Place name' 
			value = {props.placeData.value}
			valid = {props.placeData.valid}
			touched = {props.placeData.touched} 
			onChangeText = {props.onTextChange} 
		/>
	);
}

export default PlaceInput;

const styles = StyleSheet.create({

	input: {
		width: '80%'
	}
})
