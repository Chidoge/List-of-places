import React from "react";
import { StyleSheet } from 'react-native';
import DefaultInput from "../UI/DefaultInput/DefaultInput";


class PlaceInput extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			placeName : ''
		};
	}

	onTextChange = (text) => {
		this.setState({
			placeName: text
		});
	};

	render() {
		return (
			<DefaultInput style = {styles.input} placeholder = 'Place name' value = {this.state.placeName} onChangeText = {this.onTextChange} />
		);
	}
}

export default PlaceInput;

const styles = StyleSheet.create({

	input: {
		width: '80%'
	}
})
