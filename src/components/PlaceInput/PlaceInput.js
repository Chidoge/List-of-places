import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";


import { connect } from 'react-redux';
import { addPlace } from "../../store/actions";

const mapStateToProps = (state) => {

	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		onAddPlace : (placeName) => dispatch(addPlace(placeName))
	}
}


class PlaceInput extends Component {


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

	onButtonPress = () => {
		if (this.state.placeName.trim() === "") {
			return;
		}
		this.setState({
			placeName : ''
		})
		this.props.onAddPlace(this.state.placeName);
	};

	render() {
		return (
			<View style={styles.inputContainer}>
				<TextInput
					placeholder = 'An awesome place'
					value = { this.state.placeName }
					onChangeText = { this.onTextChange }
					style = { styles.placeInput }
				/>
				<Button
					title = 'Add item'
					style = { styles.placeButton }
					onPress = { this.onButtonPress }
				/>
			</View>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceInput);

const styles = StyleSheet.create({
	inputContainer: {
		// flex: 1,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	placeInput: {
		width: "70%"
	},
	placeButton: {
		width: "30%"
	}
});


