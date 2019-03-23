import React from 'react';
import { View, Button, ScrollView, StyleSheet } from 'react-native';

import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

import { addPlace } from '../../store/actions/places';
import { connect } from 'react-redux';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

import validate from '../../utility/validation';


const mapStateToProps = (state) => {

	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		onAddPlace : (placeName, location, image) => dispatch(addPlace(placeName, location, image))
	}
}


class SharePlaceScreen extends React.Component {

    static navigatorStyle = {
        navBarButtonColor: 'orange'
    };

    constructor(props) {
        super(props);

        this.state = {
            controls: {
                placeName: {
                    value: '',
                    valid: false,
                    touched: false,
                    validationRules: {
                        notEmpty: true
                    }
                },
                location: {
                    value: null,
                    valid: false
                },
                image: {
                    value: null,
                    valid: false
                }
            }
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

    onTextChange = (text) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    placeName: {
                        ...prevState.controls.placeName,
                        value: text,
                        valid: validate(text, prevState.controls.placeName.validationRules),
                        touched: true
                    }
                }
            }
        })
    }

    onSharePlace = () => {

        const placeName = this.state.controls.placeName.value;
        const location = this.state.controls.location.value;
        const image = this.state.controls.image.value;

        this.props.onAddPlace(placeName, location, image);

        /* Clear text input after submitting */
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    placeName: {
                        ...prevState.controls.placeName,
                        value: ''
                        
                    }
                }
            }
        })

        alert('Place added!');
        

    }

    locationPickedHandler = (location) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    location: {
                        value: location,
                        valid: true
                    }
                }
            }
        })
    }

    imagePickedHandler = (image) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    image: {
                        value: image,
                        valid: true
                    }
                }
            }
        })
        
    }

    render() {
        return (
            <ScrollView contentContainerStyle = { styles.container }>

                <MainText>
                    <HeadingText>
                        Share a place!
                    </HeadingText>
                </MainText>

                <PickImage onImagePicked = {this.imagePickedHandler}/>
                <PickLocation onLocationPick = {this.locationPickedHandler}/>


                <PlaceInput 
                    placeData = {this.state.controls.placeName} 
                    onTextChange = {this.onTextChange}
                    />
                <View style = {styles.button}>
                    <Button 
                        title = 'Share place' 
                        onPress = {this.onSharePlace}
                        disabled = {!this.state.controls.placeName.valid || !this.state.controls.location.valid || !this.state.controls.image.valid} 
                        />
                </View>

            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);

const styles = StyleSheet.create({
    container : {
        alignItems: 'center'
    },
    placeHolder: {
        margin: 5,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150
    },
    input: {
        width : '90%'
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: '100%',
        height: '100%'
    }
})