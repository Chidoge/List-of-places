import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { selectPlace } from "../../store/actions";

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSelectItem : (key) => dispatch(selectPlace(key))
	}
}

class ListItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { onSelectItem, placeImage, placeName, placeKey } = this.props;

		return (
			<TouchableOpacity onPress = { () => { onSelectItem(placeKey)}}>
				<View style={styles.listItem}>
					<Image resizeMode="cover" source={ placeImage} style={styles.placeImage} />
					<Text>{placeName}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);

const styles = StyleSheet.create({
	listItem: {
		width: "100%",
		marginBottom: 5,
		padding: 5,
		backgroundColor: "#eee",
		flexDirection: "row",
		alignItems: "center"
	},
	placeImage: {
		marginRight: 8,
		height: 50,
		width: 50
	}
});