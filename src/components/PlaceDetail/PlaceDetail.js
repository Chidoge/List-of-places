import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = (props) => {

    let modalContent = null;

    if (props.selectedPlace) {
        modalContent =
        <View>               
            <Image style = {styles.imageContainer} source = {props.selectedPlace.image} />
            <Text style = {styles.name}>{ props.selectedPlace.name }</Text>
        </View>  ;
    }

    return (
        <Modal visible = { props.selectedPlace !== null } onRequestClose = { props.onModalClosed } animationType = "slide">
            <View style = {styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title = "Delete" color = "red" onPress = { props.onItemDeleted }/>
                    <Button title = "Close" onPress = { props.onModalClosed }/>
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({

    modalContainer : {
        margin : 22
    },
    imageContainer : {
        width : "100%",
        height : 200
    },
    name : {
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 28
    },
    button : {
        margin : 20
    }
})

export default placeDetail;