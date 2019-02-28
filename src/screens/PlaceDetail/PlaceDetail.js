import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { deletePlace } from "../../store/actions";


const mapStateToProps = (state) => {

	return {

	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		onDeletePlace: (key) => dispatch(deletePlace(key))
	}
}

class PlaceDetail extends React.Component {

	deletePlace = () => {
		this.props.onDeletePlace(this.props.selectedPlace.key);
		this.props.navigator.pop();
	}

	render() {

		const { selectedPlace } = this.props; 

		return (

			<View style={styles.modalContainer}>
				<View>
					<Image source={selectedPlace.image} style={styles.placeImage} />
					<Text style={styles.placeName}>{selectedPlace.name}</Text>
				</View>
				<View style = {styles.menu}>
					<View style = {styles.deleteButton}>
						<TouchableOpacity onPress = { this.deletePlace }>
							<Icon name = "ios-trash" color = "gray" size = {30}/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetail);

const styles = StyleSheet.create({
	modalContainer: {
		margin: 22
	},
	placeImage: {
		width: "100%",
		height: 200
	},
	placeName: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 28
	},
	deleteButton: {
		alignItems: 'center'
	},
	menu: {
		marginTop: 50,
		alignItems: 'center'
	}
});

