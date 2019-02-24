import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import placeImage from './src/assets/beautiful-place.jpg';

import PlaceList from './src/components/PlaceList/PlaceList';
import UserInput from './src/components/UserInput/UserInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			placeName : '',
			list : [],
			selectedPlace : null
		};
	}

	onTextChange = (event) => {
		this.setState({
			placeName : event
		})
	}

	onButtonPress = () => {

		if (this.state.placeName.trim() === "") {
			return;
		}

		this.setState(prevState => {
			return {
				list : prevState.list.concat({
					key : Math.random().toString(),
					name : this.state.placeName,
					image : {
						uri : "https://puu.sh/CQZXq/0773f87d38.jpg"
					}
				}),
				placeName : ''
			};
		})
	}

	itemSelectHandler = (i) => {

		this.setState(prevState => {
			return {
				selectedPlace : prevState.list.find((place) => {
					return (i === place.key);
				})
			}
		});

	}

	placeDeletedHandler = () => {
		this.setState(prevState => {
			return {
				list : prevState.list.filter(place => {
					return (place.key !== prevState.selectedPlace.key);
				}),
				selectedPlace : null
			}
		})
	}

	modalCloseHandler = () => {
		this.setState({
			selectedPlace : null
		})
	}

	render() {


		return (
			<View style={styles.container}>
				<Text style = {styles.welcome } >Welcome to my first app!</Text>
				<PlaceDetail selectedPlace = {this.state.selectedPlace} onItemDeleted = {this.placeDeletedHandler} onModalClosed = {this.modalCloseHandler}></PlaceDetail>
				<UserInput placeName = {this.state.placeName} onTextChange = {this.onTextChange} onButtonPress = {this.onButtonPress}> </UserInput>
				<PlaceList list = {this.state.list } onSelectItem = { this.itemSelectHandler }></PlaceList>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding : 20,
		flexDirection : 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		color : 'blue',
		margin: 20,
		marginBottom : 50
	}
});
