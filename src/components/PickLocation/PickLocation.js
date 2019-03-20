import React from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class PickLocation extends React.Component {


    constructor(props) {

        super(props);

        this.state = {
            focusedLocation: {
                latitude: -36.853039,
                longitude: 174.768932,
                latitudeDelta: 0.0122,
                longitudeDelta: (Dimensions.get('window').width/ Dimensions.get('window').height )* 0.0122 
            },
            locationChosen: false
        }
    }


    pickLocation = (event) => {

        const coords = event.nativeEvent.coordinate;

        this.map.animateToRegion({
           ...this.state.focusedLocation,
           latitude: coords.latitude,
           longitude: coords.longitude,
           duration: 500
        });

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

        this.props.onLocationPick({
            latitude: coords.latitude,
            longitude: coords.longitude
        })
    }

    getLocation = () => {
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coordsEvent = {
                    nativeEvent: {
                        coordinate: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        }
                    }
                }
                this.pickLocation(coordsEvent);
            },
            (err) => {
                alert(...err)
            }
        )
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
                    initialRegion = {this.state.focusedLocation} 
                    provider = {PROVIDER_GOOGLE} 
                    style = {styles.map}
                    onPress = {this.pickLocation}
                    ref = { (ref) => this.map = ref}
                >
                    { marker }
                </MapView>
                <View style = {styles.button}>
                    <Button title = 'Locate me' onPress = {this.getLocation}/>
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