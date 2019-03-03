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


class AuthScreen extends React.Component {


    constructor(props) {
        super(props);
        
        this.state = {
            viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
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

    onLogin = () => {
        startMainTabs();
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
                        onPress = { this.onLogin }
                        color = '#29aaf4'
                    >
                        Switch to login
                    </ButtonBackground>

                    <View style = {styles.inputContainer}>
                        <DefaultInput style = {styles.input} placeholder = 'Email' />
                        <View style = { this.state.viewMode === 'portrait' ? styles.portraitPasswordContainer : styles.landscapePasswordContainer }>
                            <View style = { this.state.viewMode === 'portrait' ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper }>
                                <DefaultInput style = {styles.input} placeholder = 'Password' />
                            </View>
                            <View style = { this.state.viewMode === 'portrait' ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper }>
                                <DefaultInput style = {styles.input} placeholder = 'Confirm password' />
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