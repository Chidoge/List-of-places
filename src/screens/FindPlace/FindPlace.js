import React from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    Animated,
    StyleSheet 
} from 'react-native';

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
    
    static navigatorStyle = {
        navBarButtonColor: 'orange'
    };

    constructor(props) {
        super(props);

        this.state = {
            placesLoaded: false,
            removeAnim: new Animated.Value(1),
            listAnim: new Animated.Value(0)
        }

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

    loadPlaces = () => {
        Animated.timing(this.state.listAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    onButtonPress = () => {

        Animated.timing(this.state.removeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                placesLoaded: true
            });
            this.loadPlaces();
        });
    }

    render() {

        let content = (
            <Animated.View
                style = {{
                    opacity: this.state.removeAnim,
                    transform: [
                        {
                            scale: this.state.removeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [5, 1]
                            })
                        }
                    ]
                }}
                >
                <TouchableOpacity onPress = {this.onButtonPress}>
                    <View style = {styles.searchButton}>
                        <Text style = {styles.searchText}>
                            Find places
                        </Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>

        );

        if (this.state.placesLoaded) {
            content = 
                <Animated.View
                    style = {{
                        opacity: this.state.listAnim
                    }}
                    >
                    <PlaceList onItemSelect = {this.onItemSelect} places = {this.props.places} />
                </Animated.View>
        }

        return (
            <View style = {this.state.placesLoaded ? null : styles.buttonContainer}>
                { content }
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButton: {
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 50,
        padding: 20
    },
    searchText: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 26
    }
});