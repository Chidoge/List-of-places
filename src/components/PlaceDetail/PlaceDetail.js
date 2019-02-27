import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { deletePlace, deselectPlace } from "../../store/actions";


const mapStateToProps = (state) => {

	return {
		selectedPlace : state.places.selectedPlace
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		onDeletePlace: () => dispatch(deletePlace()),
		onDeselectPlace: () => dispatch(deselectPlace())
	}
}

class PlaceDetail extends React.Component {

	render() {

		let modalContent = null;

		const { selectedPlace, onDeletePlace, onDeselectPlace } = this.props; 

		if (selectedPlace) {
			modalContent = (
				<View>
					<Image source={selectedPlace.image} style={styles.placeImage} />
					<Text style={styles.placeName}>{selectedPlace.name}</Text>
				</View>
			);
		}
		return (
			<Modal
				onRequestClose = { onDeselectPlace }
				visible = { selectedPlace !== null }
				animationType = 'slide'
			>
				<View style={styles.modalContainer}>
					{modalContent}
					<View style = {styles.menu}>
						<View style = {styles.deleteButton}>
							<TouchableOpacity onPress = { onDeletePlace }>
								<Icon name = "ios-trash" color = "gray" size = {30}/>
							</TouchableOpacity>
						</View>
						<View style = {styles.closeButton}>
							<Button title = 'Close' onPress = { onDeselectPlace } />
						</View>
					</View>
				</View>
			</Modal>
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
	closeButton: {
		width: '60%'
	},
	menu: {
		marginTop: 50,
		alignItems: 'center'
	}
});

