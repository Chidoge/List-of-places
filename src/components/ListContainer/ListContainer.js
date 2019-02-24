import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const listContainer = (props) => {

    return (
        <FlatList style = {styles.listContainer} data = { props.list } 
        renderItem = { (info) => (
            <ListItem placeName = {info.item.value} onItemPressed = { () => props.onItemDelete(info.item.key)}></ListItem>
        )} />

    );

}

const styles = StyleSheet.create({

	listContainer : {
		width : "100%"
	}
})


export default listContainer;