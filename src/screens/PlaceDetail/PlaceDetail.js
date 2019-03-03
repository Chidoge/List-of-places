import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform, Dimensions } from "react-native";
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

	constructor(props) {

		super(props);

		this.state = {
			viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
		};
		Dimensions.addEventListener('change', this.updateStyles);
	}

	updateStyles = (dims) => {

		this.setState({
			viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
		})
	}

	componentWillUnmount() {
		Dimensions.removeEventListener('change', this.updateStyles);
	}

	deletePlace = () => {
		this.props.onDeletePlace(this.props.selectedPlace.key);
		this.props.navigator.pop();
	}

	render() {

		const { selectedPlace } = this.props; 

		return (

			<View style={[styles.container, (this.state.viewMode === 'portrait' ? styles.portraitContainer : styles.landscapeContainer)]}>

				<View style = {styles.subContainer}>
					<Image source={selectedPlace.image} style={styles.placeImage} />
				</View>


				{/* Text and button */}
				<View style = {styles.subContainer}>
					<View>
						<Text style={styles.placeName}>{selectedPlace.name}</Text>
					</View>

					<View>
						<TouchableOpacity onPress = { this.deletePlace }>
							<View style = {styles.deleteButton}>
								<Icon name = { Platform.OS === 'android' ? 'md-trash' : 'ios-trash' } color = "gray" size = {30}/>
							</View>
						</TouchableOpacity>
					</View>
				</View>

			</View>
		);
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetail);

const styles = StyleSheet.create({
	container: {
		margin: 22,
		flex: 1
	},
	portraitContainer: {
		flexDirection: 'column',

	},
	landscapeContainer: {
		flexDirection: 'row'
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
	subContainer: {
		flex: 1
	}
});

