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
    

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent = (event) => {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'sideDrawerToggle') {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true,
                    to: 'open'
                });
            }
        }
    }

    
    onItemSelect = (key) => {
        
        const selectedPlace = this.props.places.find(place => {
            return (place.key === key)
        });

        this.props.navigator.push({
            screen: "places.PlaceDetailScreen",
            title: selectedPlace.name,
            passProps: {
                selectedPlace: selectedPlace
            },
            animated: true,
            animationType: 'slide-horizontal'
        });
    }


    render() {
        return (
            <View>
                <View style = {styles.listContainer}>
                    <PlaceList onItemSelect = {this.onItemSelect} places = {this.props.places} />
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