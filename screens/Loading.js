import { StyleSheet, Text, View, BackHandler,Image, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from "react";
import Constants from 'expo-constants';

export default function Loading() {
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
      <Image style={styles.image} source={require('../assets/main_image.jpg')}/>
      <ActivityIndicator style={styles.indicator} size={'large'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#ffffff',
        flex:1
    },
    indicator: {
      textAlign: 'center',
      marginTop: '10%'
    }
})