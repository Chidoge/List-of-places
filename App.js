import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListContainer from './src/components/ListContainer/ListContainer';
import UserInput from './src/components/UserInput/UserInput';

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			placeName : '',
			list : []

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
				// placeName : '',
				list : prevState.list.concat({key : Math.random() ,value : this.state.placeName})
			};
		})
	}

	onItemDelete = (i) => {

		this.setState(prevState => {
			return {
				list : prevState.list.filter((place) => {
					return ( i !== place.key);
				})
			}
		})

	}

	render() {


		return (
			<View style={styles.container}>
				<Text style = {styles.welcome } >Welcome to my first app!</Text>
				<UserInput placeName = {this.state.placeName} onTextChange = {this.onTextChange} onButtonPress = {this.onButtonPress}> </UserInput>
				<ListContainer list = {this.state.list } onItemDelete = { this.onItemDelete }></ListContainer>
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
