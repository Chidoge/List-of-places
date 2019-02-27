// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import { connect } from "react-redux";

// import PlaceInput from "./src/components/PlaceInput/PlaceInput";
// import PlaceList from "./src/components/PlaceList/PlaceList";
// import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

// const mapStateToProps = state => {

// 	return {

// 	};
// };

// const mapDispatchToProps = dispatch => {

// 	return {

// 	};
// };

// class App extends Component {


// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<PlaceDetail />
// 				<PlaceInput />
// 				<PlaceList />
// 			</View>
// 		);
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		padding: 26,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "flex-start"
// 	}
// });

import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

/* Register screens */
Navigation.registerComponent("places.AuthScreen", () => AuthScreen);
Navigation.registerComponent("places.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("places.FindPlaceScreen", () => FindPlaceScreen);

/* Start app */
Navigation.startSingleScreenApp({

	screen : {
		screen: "places.AuthScreen",
		title : "Login"
	}
});