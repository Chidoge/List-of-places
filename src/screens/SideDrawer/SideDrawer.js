import React from 'react';
import { View, Text, Dimensions } from 'react-native';


class SideDrawer extends React.Component {

    render() {

        return (
            <View style = {{ width: Dimensions.get('window').width * 0.8}}>
                <Text>Side drawer</Text>
            </View>
        );
    }
}

export default SideDrawer;