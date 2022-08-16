import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import  Constants  from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { Details } from './Register';

function Login() {
    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const entryCheck = () => {
    if (checkDetails() == 1) {
      correct(true);
      const Go = () => navigation.navigate('Dashboard');
      Go();
    } else {
      //console.log("false");
      correct(false);
    }
  };
  const checkDetails = () => {
    for (let x of Details) {
      if (x.username.trim() == username.trim() && x.password == password) {
        x.loged = true;
        return 1;
      }
    }
  }
  const [isCorrect, correct] = React.useState(true);
  const navigation = useNavigation(); 
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.loginImage} source={require('../assets/login_screen.jpg')}/>

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

        <TouchableOpacity style={styles.loginBtn} onPress={entryCheck}>
          <Text style={{fontSize: 15}}>Login</Text>
        </TouchableOpacity>

        <Text style={{alignSelf: 'center', color: 'red'}}>{isCorrect ? "" : "Invalid username or password"}</Text>      
        <Text style={{alignSelf: 'center', paddingTop: 20, color: 'blue'}}>Don't have a account?</Text>

        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Register')}>
          <Text style={{fontSize: 15}}>Register</Text>
        </TouchableOpacity>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7bc5c6',
    marginTop: Constants.statusBarHeight,
  },
  loginImage: {
    height: 200,
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
  loginBtn: {
    backgroundColor: '#2cfd00',
    padding: 15,
    alignItems: 'center',
    margin: 12,
    borderRadius: 5,
  }

});
export default Login;