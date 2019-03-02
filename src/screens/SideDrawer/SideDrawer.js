import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends React.Component {

    render() {

        return (
            <View style = {[{ width: Dimensions.get('window').width * 0.8}, styles.container]}>
                <TouchableOpacity>
                    <View style = {styles.drawerItem}>
                        <Icon style = {styles.drawerItemIcon} name = 'ios-log-out' size = {30} color = '#bbb' />
                        <Text>Sign out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SideDrawer;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: 'white',
        flex: 1
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eee'
    },
    drawerItemIcon: {
        marginLeft: 10,
        marginRight: 10
    }
})