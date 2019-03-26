import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

class ListItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { placeImage, placeName, placeKey } = this.props;

		return (
			<TouchableOpacity onPress = { () => { this.props.onItemSelect(placeKey) }}>
				<View style = { styles.listItem }>
					<Image resizeMode="cover" source = { placeImage } style = { styles.placeImage } />
					<Text>{ placeName }</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

export default ListItem;

const styles = StyleSheet.create({
	listItem: {
		marginBottom: 5,
		padding: 5,
		backgroundColor: "#eee",
		flexDirection: "row",
		alignItems: "center",
		
	},
	placeImage: {
		marginRight: 8,
		height: 50,
		width: 50
	}
});