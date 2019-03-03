import React from 'react';

import { 
    View,
    Dimensions,
    StyleSheet, 
    ImageBackground 
} from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/background.jpg';
import startMainTabs from '../maintabs/startMainTabs';

import validate from '../../utility/validation';


class AuthScreen extends React.Component {


    constructor(props) {
        super(props);
        
        this.state = {
            viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
            controls: {
                email: {
                    value: '',
                    valid: false,
                    validationRules: {
                        isEmail: true
                    }
                },
                password: {
                    value: '',
                    valid: false,
                    validationRules: {
                        minLength: 6
                    }
                },
                confirmPassword: {
                    value: '',
                    valid: false,
                    validationRules: {
                        equalTo: 'password'
                    }
                }
            }
        }

        Dimensions.addEventListener('change',this.updateStyles);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change',this.updateStyles);
    }

    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
        })
    }

    logFields = () => {
        alert(
        `${this.state.controls.email.value} - ${this.state.controls.email.valid}/ 
        ${this.state.controls.password.value} - ${this.state.controls.password.valid}/
        ${this.state.controls.confirmPassword.value} - ${this.state.controls.confirmPassword.valid}`)
    }

    onLogin = () => {
        startMainTabs();
    }

    updateInputState = (key, value) => {

        /* If the equalTo rule exists */
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            }
        }

        if (key === 'password') {
            connectedValue = {
                ...connectedValue,
                equalTo: value
            }
        }

        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid: key === 'password' ? 
                            validate(prevState.controls.confirmPassword.value, prevState.controls.confirmPassword.validationRules, connectedValue) 
                            : 
                            prevState.controls.confirmPassword.valid
                    },
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(value, prevState.controls[key].validationRules, connectedValue)
                    }
                }
            }
        })
    }

    render() {

        let headingText = null;

        if (this.state.viewMode === 'portrait') {
            headingText = 
            <MainText >
                <HeadingText>
                    Sign in to continue
                </HeadingText>
            </MainText>;
        } 

        return (

            <ImageBackground 
                source = {backgroundImage} 
                style = {styles.backgroundImage}
                >
                <View style = {styles.container}>

                    { headingText }
                    <ButtonBackground 
                        onPress = { this.logFields }
                        color = '#29aaf4'
                    >
                        Switch to login
                    </ButtonBackground>

                    <View style = {styles.inputContainer}>
                        <DefaultInput 
                            style = {styles.input} 
                            placeholder = 'Email'
                            value = {this.state.controls.email.value}
                            onChangeText = { (val) => {this.updateInputState('email', val)}} 
                            />
                        <View style = { this.state.viewMode === 'portrait' ? styles.portraitPasswordContainer : styles.landscapePasswordContainer }>
                            <View style = { this.state.viewMode === 'portrait' ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper }>
                                <DefaultInput 
                                    style = {styles.input} 
                                    placeholder = 'Password' 
                                    value = {this.state.controls.password.value}
                                    onChangeText = { (val) => {this.updateInputState('password', val)}} 
                                    />
                            </View>
                            <View style = { this.state.viewMode === 'portrait' ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper }>
                                <DefaultInput 
                                    style = {styles.input} 
                                    placeholder = 'Confirm password' 
                                    value = {this.state.controls.confirmPassword.value}
                                    onChangeText = { (val) => {this.updateInputState('confirmPassword', val)}} 
                                    />
                            </View>
                        </View>

                    </View>

                    
                    <ButtonBackground 
                        onPress = { this.onLogin }
                        color = '#29aaf4'
                    >
                        Submit
                    </ButtonBackground>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        width: '100%',
        flex: 1
    },
    inputContainer: {
        width: '80%',
        margin: 10
    },
    input: {
        backgroundColor: '#eee',
        borderColor: '#bbb'
    },
    landscapePasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    portraitPasswordContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    landscapePasswordWrapper: {
        width: '45%'
    },
    portraitPasswordWrapper: {
        width: '100%',
    }

});
export default AuthScreen;