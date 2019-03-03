import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = (props) => {

    return (
        <TextInput 
            underlineColorAndroid = 'transparent'
            {...props} 
            style = {[styles.input, props.style]}
        />
    );
}

export default defaultInput;

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#eee',
        padding: 5,
        marginTop: 8,
        marginBottom: 8
    }
});