import React from 'react';
import { View, Text } from 'react-native';

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

    render() {
        return (
            <View>
                <PlaceInput onAddPlace = {this.props.onAddPlace}/>
            </View>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);