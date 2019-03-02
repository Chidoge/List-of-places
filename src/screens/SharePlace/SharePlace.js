import React from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

import imagePlaceholder from '../../assets/beautiful-place.jpg';

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
            <ScrollView contentContainerStyle = { styles.container }>

                <MainText>
                    <HeadingText>
                        Share a place!
                    </HeadingText>
                </MainText>

                <View style = {styles.placeHolder}>
                    <Image source = {imagePlaceholder} style = {styles.previewImage} />
                </View>
                <View style = {styles.button}>
                    <Button title = 'Pick image' />
                </View>


                <View style = {styles.placeHolder}>
                    <Text>
                        Map
                    </Text>
                </View>
                <View style = {styles.button}>
                    <Button title = 'Locate me' />
                </View>

                <DefaultInput style = {styles.input} placeholder = 'Place name' />
                <View style = {styles.button}>
                    <Button title = 'Share place' />
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