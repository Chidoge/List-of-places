import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';

const listItem = (props) => (
    <TouchableNativeFeedback onPress = { props.onItemPressed}>
        <View style = {styles.listItem} >
            <Image style = {styles.image} source = { props.placeImage }/>
            <Text>{ props.placeName} </Text>
        </View>
    </TouchableNativeFeedback>
);

const styles = StyleSheet.create({

    listItem : {
        width : "100%",
        padding : 5,
        backgroundColor : "#eeeeee",
        flexDirection : "row",
        alignItems : 'center'
    },
    image : {
        marginRight : 8,
        width : 50,
        height : 50
    }
})


export default listItem;