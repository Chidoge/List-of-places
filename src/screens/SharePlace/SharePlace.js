import React from 'react';
import { View, StyleSheet } from 'react-native';

import PlaceInput from '../../components/PlaceInput/PlaceInput';

import { addPlace } from '../../store/actions/places';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {

	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		onAddPlace : (placeName) => dispatch(addPlace(placeName))
	}
}


class SharePlaceScreen extends React.Component {

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

    render() {
        return (
            <View style = { styles.container }>
                <View style = { styles.input }>
                    <PlaceInput onAddPlace = {this.props.onAddPlace}/>
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);

const styles = StyleSheet.create({
    container : {
        alignItems: 'center'
    },
    input: {
        marginTop : 20,
        width : '90%'
    }
})