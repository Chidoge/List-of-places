import React from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class PickLocation extends React.Component {


    constructor(props) {

        super(props);

        this.state = {
            focusedLocation: {
                latitude: 37.7900352,
                longitude: -122.4013726,
                latitudeDelta: 0.0122,
                longitudeDelta: (Dimensions.get('window').width/ Dimensions.get('window').height )* 0.0122 
            },
            locationChosen: false
        }
    }


    pickLocation = (event) => {

        const coords = event.nativeEvent.coordinate;

        this.setState(prevState => {
            return {
                focusedLocation: {
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            }
        })
    }

    render() {

        let marker = null;

        if (this.state.locationChosen) {
            marker = 
                <MapView.Marker coordinate = {this.state.focusedLocation}/>
        }
        return (
            <View style = {styles.container }>
                <MapView 
                    region = {this.state.focusedLocation}
                    provider = {PROVIDER_GOOGLE} 
                    style = {styles.map}
                    onPress = {this.pickLocation}
                >
                    { marker }
                </MapView>
                <View style = {styles.button}>
                    <Button title = 'Locate me' onPress = { () => { alert('Pick location') }}/>
                </View>
            </View>
        );
    }

}

export default PickLocation;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    map: {
        width: '100%',
        height: 250
    },
    button: {
        margin: 8
    }
})