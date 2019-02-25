import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

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
					<View>
						<Button title = 'Delete' color = 'red' onPress = { onDeletePlace } />
						<Button title = 'Close' onPress = { onDeselectPlace } />
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
	}
});

