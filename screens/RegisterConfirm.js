import React, {useState, useEffect} from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, BackHandler } from 'react-native';
import  Constants  from 'expo-constants';

function RegisterConfirm() {
    const navigation = useNavigation();
    setTimeout(() => {
        navigation.navigate('Login');
      }, 2500);
      useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
      }, []);
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/right.png')} />
            <Text style={styles.text}>Successfully Registered!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c6fffb',
        marginTop: Constants.statusBarHeight,
    },
    image: {
        height: 250,
        resizeMode: 'contain',
        alignSelf: 'center',
        top: '15%'
    },
    text: {
        color: '#1ca300',
        fontSize: 30,
        top: '20%',
        alignSelf: 'center'
    }
})

export default RegisterConfirm;