import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlaceList from '../../components/PlaceList/PlaceList';

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

class FindPlaceScreen extends React.Component {

    render() {
        return (
            <View>
                <View style = {styles.listContainer}>
                    <PlaceList places = {this.props.places} />
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);

const styles = StyleSheet.create({
    listContainer : {
        margin : 20
    }
});