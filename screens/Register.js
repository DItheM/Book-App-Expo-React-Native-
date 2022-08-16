import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import  Constants  from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const Details = [
    {
        username: 'user',
        password: 'password',
        loged: false
    }
];

function Register() {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [repassword, onChangeRePassword] = React.useState('');
    const navigation = useNavigation();
    const checkDetails = () => {
        for (let x of Details) {                 
            if (x.username == username) {
                //console.log(x.username)
                return 1;
            }
        }
    };
    const checkPasswordAndFields = () => {
        if (username == '' || password == '' || repassword == '') {
            Empty(true);
        } else {
            Empty(false);
            if (password == repassword) {
                Match(true);
                    if (checkDetails() == 1) {
                        AlreadyExist(true);
                    } else {
                        AlreadyExist(false);
                        Details.push({username, password, loged: false});
                        //console.log(Details);
                        const Back = () => navigation.navigate('RegisterConfirm');
                        Back();
                    }    
            } else {
                Match(false);
            }
        }
    };

    const [isMatch, Match] = React.useState(true);
    const [isEmpty, Empty] = React.useState(false);
    const [isAlreadyExist, AlreadyExist] = React.useState(false);

    return (
        <View style={styles.container}>
            <ScrollView>
            <Image style={styles.image} source={require('../assets/Register.jpg')}/>

            <TextInput
            style={styles.input}
            onChangeText={(username) => {
                onChangeUsername();
                if (username.includes(' ')) {
                  alert("You can't put white spaces");
                  onChangeUsername(username.trim()); 
                 } else {
                  onChangeUsername(username);
                 };
                }}
            value={username}
            placeholder="Username"
            keyboardType="default"
            placeholderTextColor={'#464646'}
            maxLength={10}
            />
            <TextInput
            style={styles.input}
            onChangeText={(password) => {
                onChangePassword();
                if (password.includes(' ')) {
                  alert("You can't put white spaces");
                  onChangePassword(password.trim()); 
                 } else {
                  onChangePassword(password);
                 };
                }}
            value={password}
            placeholder="Password"
            secureTextEntry= {true}
            placeholderTextColor={'#464646'}
            maxLength={8}
            />
            <TextInput
            style={styles.input}
            onChangeText={(repassword) => {
                onChangeRePassword();
                if (repassword.includes(' ')) {
                  alert("You can't put white spaces");
                  onChangeRePassword(repassword.trim()); 
                 } else {
                  onChangeRePassword(repassword);
                 };
                }}
            value={repassword}
            placeholder="Re-enter Password"
            secureTextEntry= {true}
            placeholderTextColor={'#464646'}
            maxLength={8}
            />

            <Text style={{alignSelf: 'center', color: 'red'}}>{isMatch ? "" : "Re-enter password correctly"}</Text>
            <Text style={{alignSelf: 'center', color: 'red'}}>{isEmpty ? "Fields cannot empty" : ""}{isAlreadyExist ? "Username is already exists" : ""}</Text>

            <TouchableOpacity style={styles.registerBtn} onPress={checkPasswordAndFields}>
                <Text style={{fontSize: 15}}>Register</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9cd8d6',
        marginTop: Constants.statusBarHeight,
    },
    image: {
        height: 250,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#deffff'
    },
    registerBtn: {
        backgroundColor: '#2cfd00',
        padding: 15,
        alignItems: 'center',
        margin: 12,
        borderRadius: 5
    },
})

export default Register;
export {Details};