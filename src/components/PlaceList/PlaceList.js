import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";


class PlaceList extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {

		const { places } = this.props;

		return (
			<FlatList
				style = { styles.listContainer }
				data = { places }
				renderItem={ (info) => (
					<ListItem
						placeName = { info.item.name }
						placeImage = { info.item.image }
						placeKey = { info.item.key }
					/>
				)}
			/>
		);
	}

};

export default PlaceList;

const styles = StyleSheet.create({
	listContainer: {
		width: "100%"
	},
	listItem: {
		justifyContent: 'center'
	}
});


