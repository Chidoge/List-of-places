import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		places : state.places.places
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

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
						placeName={info.item.name}
						placeImage={info.item.image}
						placeKey = {info.item.key}
					/>
				)}
			/>
		);
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);

const styles = StyleSheet.create({
	listContainer: {
		width: "100%"
	}
});


